<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  mounted () {
    this.renderChart({
      labels: ['Wilayah 1', 'Wilayah 2', 'Wilayah 3', 'Wilayah 4', 'Wilayah 5'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16',
            '#D6D6D6',
          ],
          data: [100000, 150000, 200000, 300000, 300000]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>