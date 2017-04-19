export default {

	getProducts() {
    console.log('woring so far getting products..');

		var products = {};

      $.get("https://beautiful-bee-naturals.myshopify.com/admin/products.json", {

      },
        function(response) {
          console.log('test');
          products = response;
          console.log('Response from api');
          console.log(response);
        },"JSON");


		return {
	    	products: products
	    }

	}

}
