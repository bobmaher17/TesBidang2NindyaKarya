<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['2020-10-20', '2020-10-21', '2020-10-22'],
      datasets: [
        {
          label: 'Total Produksi Harian',
          backgroundColor: '#f87979',
          data: [100000, 450000, 500000]
        },
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}

</script>