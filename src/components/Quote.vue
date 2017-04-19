<script>
  import ProductsService from '../services/products'
  import ShopifyBuy from 'shopify-buy'

  export default {
    data: function () {
      return {
        products: {}
      }
    },

    mounted: function () {
      var self = this;

      const shopClient = ShopifyBuy.buildClient({
        accessToken: 'a4f8e58ead2dc40e3dd28320170b2cdc',
        appId: '6',
        domain: 'beautiful-bee-naturals.myshopify.com/'
      });

      // fetch a product using resource id web-app-sample.myshopify.com/
      shopClient.fetchAllProducts()
      .then(function (product) {
        console.log('');
        self.products = product;
      })
      .catch(function () {
        console.log('Request failed');
      });
    }
  }

</script>

<template>
  <div>
    <div class="main-banner">

    </div>
    <div class="our-collections-wrapper">
      <div class="section-header">
        <h2>Our Collections</h2>
      </div>
      <div class="row flex">
        <div class="product-wapper" v-for="product in products">
          <img v-bind:src="product.attrs.images[0].src" alt=""/>
          <h4>{{product.attrs.title}} - <em>{{product.attrs.variants[0].price}}</em></h4>
        </div>
      </div>
    </div>
    <div class="cta-banner">
      <div class="input-group">
        <input type="email" name="" value="" placeholder="Sign up to out mailing list!">
        <span>
          <button>Subscribe</button>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  /* Imports */
  @import "../stylesheets/variables.scss";

  .main-banner {
    width: 100%;
    height: 80vh;
    background-image: url('http://cdn.shopify.com/s/files/1/1590/6193/files/banner-sample-3.jpg');
    background-position: center;
    background-size: cover;
  }

  .our-collections-wrapper {
    margin: 80px 0;

    .section-header {
      text-align: center;
      position: relative;

      h2 {
        font-weight: bold;
      }

      &::after {
        content: "";
        position: absolute;
        width: 40px;
        height: 1px;
        left: calc(50% - 20px);
        margin-right: -30px;
        bottom: -20px;
        background-color: #333;

      }
    }

    .flex {
      display: flex;
      justify-content: space-around;

      .product-wapper {
          flex: 1;
          text-align: center;

          img {
            width: 80%;
          }

          h4 {
            font-family: "PT Serif",serif;

            em {
              font-size: 18px;
            }
          }
      }
    }
  }

  .cta-banner {
    background-color: #f7f7f7;
    padding: 60px 0;

    .input-group {
      width: 500px;
      margin: 0 auto;
      display: flex;
      border: solid 14px #fff;

      input {
        width: 400px;
        margin: 0;
        border-width: 0;
        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0);
        font-family: "PT Serif",serif;
        font-style: italic;
      }

      button {
        width: 100px;
        background: #333;
        color: #fff;
        height: 100%;
      }
    }
  }
</style>
