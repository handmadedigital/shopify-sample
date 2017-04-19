<script>
  export default {
    name: "Navbar"
  }
</script>

<template>
  <div>
    <div class="top-bar">
      <div class="row flex">
        <div class="top-bar-left">
          <div class="menu-logo"><img src="http://cdn.shopify.com/s/files/1/1590/6193/files/logox2.jpg" alt=""></div>

        </div>
        <div class="top-bar-right">
          <ul>
            <li><router-link to="home">Home</router-link></li>
            <li><router-link to="about">About</router-link></li>
            <li><router-link to="quote">Quote</router-link></li>
          </ul>
        </div>
      </div>
      </div>
  </div>
</template>


<style lang="sass">
  /* Imports */
  @import "../stylesheets/variables.scss";

  .top-bar {
    background-color: transparent;
    padding: 20px 0;
    height: 80px;
    margin-bottom: -80px;

    .flex {
      display: flex;

      div {
        flex: 1;
      }

      .top-bar-right {

        ul {
          display: flex;
          justify-content: flex-end;

          li {
            a {
              color: #000;
            }
          }
        }
      }
    }

    .menu-logo {
      width: 200px;

      img {
        width: 100%;
      }
    }

    ul {
      width: 100%;
      background-color: transparent;
      list-style: none;
      display: flex;
      li {
        margin: 0 20px;
      }
    }
  }

</style>
