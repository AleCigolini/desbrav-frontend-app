import { HttpParams } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { SelectEnumType } from './select-enum-type';


export class CoreUtil {
  public static setParam(params: HttpParams, obj: any, name: string, checkForInvalid?: boolean): HttpParams {
    if (obj != null && ((checkForInvalid && obj) || !checkForInvalid)) {
      params = params.append(name, obj.toString());
    }
    return params;
  }

  public static buildSelectionObject(enumeration: any, translateKey: string, translateService: TranslateService): SelectEnumType<any>[] {
    return Object.keys(enumeration).map(value => ({
      value,
      display: translateService.instant(translateKey + value.toLowerCase())
    }));
  }
}
