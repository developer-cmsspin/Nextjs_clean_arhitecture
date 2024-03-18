import CurrencyDto from './currencyDto';
import LanguageDto from './languageDto';
import PhoneDto from './phoneDto';

export default class ResponseContentSiteDto {
  public languages: LanguageDto[] = [];
  public currencies: CurrencyDto[] = [];
  public phones: PhoneDto[] = [];
  public name: string = '';
  public email: string = '';
  public address: string = '';
  public logo: string = '';
  public favicon: string = '';
  public facebook: string = '';
  public twitter: string = '';
  public instagram: string = '';
  public h1: string = '';
  public h2: string = '';
  public h3: string = '';
  public metaTitle: string = '';
  public metaDescription: string = '';
  public metaKeywords: string = '';
  public metaImage: string = '';
  public metaStructData: string = '';
  public indexFollow: string = '';
}
