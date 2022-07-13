import axios from "axios";
import { Region } from "../models/Region";
import { API_DEFAULTS } from "./constants";
import { UrlsConverter } from "../utils/UrlsConverter";
import { PipedApiProps } from "./PipedApi";

export abstract class PipedFetcher {
  protected readonly baseUrl: string;
  protected readonly region: Region;

  protected readonly httpClient = axios;

  constructor(props: PipedApiProps = {}) {
    // set default props
    props.pipedInstanceBaseUrl ??= API_DEFAULTS.baseUrl;
    props.region ??= API_DEFAULTS.region;

    const { pipedInstanceBaseUrl, region } = props;

    this.baseUrl = pipedInstanceBaseUrl;
    this.region = region;

    this.baseUrl = UrlsConverter.removeUrlSlashEnd(this.baseUrl);
  }
}
