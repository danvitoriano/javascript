module.exports = function (pubsub, env) {

  require('../supplant');

  return (function (PubSub, ENV) {
    'use strict';

    var API_BASE_URL = {
      'production' : '//solucoes.oi.com.br/',
      'development' : (window.location.origin.indexOf('localhost') == 7) ? window.location.origin + '/' : '//projeto-9.homolog.infra:2000/'
    };

    var LOAD_DATA_SUBSCRIBE_LIST = 'cart.requestProducts';

    var ENDPOINTS_OPTIONS = {
      getProducts : {
        url : 'api/informacoes',
        method : 'GET'
      },
      addProduct : {
        url : 'carrinho/empresarial/adicionar/{prod_id}',
        method : 'GET'
      },
      addOiSites : {
        url : 'carrinho/empresarial/adicionar/dominio-hosting?persontype_again=2&cli_tipopessoa=1&prd_code={prod_id}&USE_TRANSFER_DOMAIN=1&spm_100={config}',
        method : 'GET'
      },
      addProductByHash : {
        url : '/api/carrinho/adicionar/{prod_id}/{service_id}',
        method : 'GET'
      },
      removeProduct : {
        url : '/api/carrinho/remover/{prod_id}',
        method : 'GET'
      }
    };

    function parseResourceUrl (url, params) {
      return API_BASE_URL[ENV] + url.supplant(params);
    }

    var $resource = {

      request : function (resource, subscribeList) {
        $.ajax({
          type: 'GET',
          url: resource,
          cache: false
        })
        .done(function (data) {
          if (resource.indexOf('adicionar') >= 0) {
            PubSub.publish('cartUI.NewProduct');
          }
          return PubSub.publish(subscribeList, data);
        });
      },
      getProducts : function (token, subscribeList) {
        this.request( parseResourceUrl(ENDPOINTS_OPTIONS.getProducts.url), subscribeList);
      },
      addProduct : function (token, prod, config, subscribeList) {
        if(config) {
          //debugger;
          return this.request( parseResourceUrl(ENDPOINTS_OPTIONS.addOiSites.url, {
            prod_id: prod,
            config: config.replace('?config=','')
          }),
          LOAD_DATA_SUBSCRIBE_LIST);
        }

        if(prod.idItem) {
          return this.request( parseResourceUrl(ENDPOINTS_OPTIONS.addProductByHash.url, {
            prod_id: prod.idItem,
            service_id: prod.idServico
          }),
          LOAD_DATA_SUBSCRIBE_LIST);
        }

        this.request( parseResourceUrl(ENDPOINTS_OPTIONS.addProduct.url, {
          prod_id: prod
        }),
        LOAD_DATA_SUBSCRIBE_LIST);
      },
      removeProduct: function (token, prod, config, subscribeList) {
        if(config) return;

        this.request( parseResourceUrl(ENDPOINTS_OPTIONS.removeProduct.url, {
          prod_id: prod
        }),
        LOAD_DATA_SUBSCRIBE_LIST);
      }
    };

    var CartApiResource = function() {
      return $resource;
    }

    return CartApiResource;
  })(pubsub, env);
}
