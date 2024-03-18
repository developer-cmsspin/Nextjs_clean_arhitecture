import RequestContentSiteDto from '@/domain/content/requestContentSiteDto';
import ResponseContentSiteDto from '@/domain/content/responseContentSiteDto';

export default interface ICustomerTemplateAction {
  getCustomerContentSite(): Promise<ResponseContentSiteDto | null>;
  setCustomerContentSite(template: RequestContentSiteDto, payload: ResponseContentSiteDto): Promise<void>;
}
