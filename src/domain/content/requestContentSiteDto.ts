export default class RequestContentSiteDto {
  /**
   * Creates an instance of the RequestCustomerTemplateDto class.
   * @param urlRequest - The URL for the request.
   * @param siteCode - The site code for the request.
   * @param selectedCountry - The selected country for the request.
   * @param language - The language for the request.
   */
  public constructor(urlRequest: string, siteCode: string, selectedCountry: string, language: string) {
    this.urlRequest = urlRequest;
    this.siteCode = siteCode;
    this.selectedCountry = selectedCountry;
    this.language = language;
  }

  /**
   * The URL for the request.
   */
  public urlRequest: string;

  /**
   * The site code for the request.
   */
  public siteCode: string;

  /**
   * The selected country for the request.
   */
  public selectedCountry: string;

  /**
   * The language for the request.
   */
  public language: string;
}
