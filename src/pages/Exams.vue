<template>


  <v-container>
    <h1>Assignments</h1>
    <div>
					<v-simple-table>
						<template v-slot:default>
							<thead>
								<tr>
									<th class="text-left">
										Title
									</th>
									<th class="text-left">
										Due Date
									</th>
                  <th class="text-left">
										Grade
									</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="assignment in assignments" :key="assignment.id">
									<td>{{ assignment.title }}</td>
                  <td>{{ assignment.due_date }}</td>
                  <td>{{ assignment.grade }}</td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
				</div>
  </v-container>




</template>

<script>
import axios from '@/config'

  export default {
    name: 'Exams',
    components: {
    },
    data(){
      return {
        assignments: null,
      }
    },
    beforeCreate() {
			let token = localStorage.getItem('token')
			let user_id = localStorage.getItem('user_id')

			axios
				.get(`/assignments/user/${user_id}`, {
					headers: {
						"Authorization": `Bearer ${token}`
					}
				})
				.then(response => {
          console.log(response.data)
					this.assignments = (response.data)
				})
				.catch(error => console.log(error))
		}
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jockey+One&display=swap');

  .main-header {
    font-size: 63px;
    font-family: 'Jockey One', sans-serif;

  }
</style>