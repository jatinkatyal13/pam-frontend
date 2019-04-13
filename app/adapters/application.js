import DS from 'ember-data';
import env from 'pam-frontend/config/environment';
import { underscore } from '@ember/string';


export default DS.JSONAPIAdapter.extend({
    host: env.apiHost,
    namespace: 'api',
    pathForType: function (type) {
      const original = this._super(...arguments)
      return underscore(original)
    },
    urlForQueryRecord(query) {
        if(query.custom) {
          switch (query.custom.ext){
            case 'url': {
              let url =  query.custom.url;
              delete query.custom;
              return `${this._super(...arguments)}/${url}`;
            }
          }
        } else  {
          return this._super(...arguments);
        }

      },
      urlForQuery(query) {
        if(query.custom) {
          switch (query.custom.ext) {
            case 'url': {
              let url =  query.custom.url;
              delete query.custom;
              return `${this._super(...arguments)}/${url}`;
            }
          }
        } else  {
          return this._super(...arguments);
        }
      }
});