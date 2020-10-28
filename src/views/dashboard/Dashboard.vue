<template>
  <div class="container">
    <!-- Page Heading -->
        <h1 class="h4 mb-2 text-gray-800">
            <b>Dashboard</b>
        </h1>
    <!-- Page Heading -->
    
    <div class="Chart">
      <h1 style="text-align:center;">Produksi Harian</h1>
      <line-example/>
    </div>

    <div class="Chart">
      <h1 style="text-align:center;">Produksi Per Wilayah</h1>
      <pie-example/>
    </div>

  </div>
</template>

<script>
  import LineExample from '@/components/Chart/LineExample'
  import PieExample from '@/components/Chart/PieExample'
  export default {
    components: {
      LineExample,
      PieExample,
    },
    data () {
      return {
        dataPoints: null,
        height: 20
      }
    },
    mounted () {
      //
    },
    methods: {
      //
    },
    computed: {
      myStyles () {
        return {
          height: `${this.height}px`,
          position: 'relative'
        }
      }
    }
  }
</script>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  h1 {
    font-family: 'Helvetica', Arial;
    color: #464646;
    text-transform: uppercase;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 15px;
    font-size: 28px;
    margin-top: 0;
  }
  .Chart {
    padding: 20px;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;
    margin: 50px 0;
  }
</style>