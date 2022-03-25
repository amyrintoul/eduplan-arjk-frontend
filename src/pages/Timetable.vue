<template>


	<v-container>
		<v-row>
			<v-col>
				<div class="text-center">
					<v-dialog v-model="dialog" width="500">
						<template v-slot:activator="{ on, attrs }">
							<v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
								Add Lesson
							</v-btn>
						</template>
						<v-card elevation="12">
							<br>
							<v-card-text>
								<v-form>
									<v-text-field v-model="form.title" label="Title" name="title" type="text"
										class="rounded-2" outlined></v-text-field>
									<v-textarea v-model="form.detail" label="Detail" name="detail" type="text"
										class="rounded-2" outlined></v-textarea>
									<v-select v-model="form.day" :items="items" item-value="day" item-text="name"
										label="Day">
									</v-select>
									<h2>Start Time:</h2>
									<v-time-picker v-model="form.dateStart" format="24hr"></v-time-picker>
									<h2>End Time:</h2>
									<v-time-picker v-model="form.dateEnd" format="24hr"></v-time-picker>
									<v-btn class="rounded-2" color="black" x-large block dark
										@click="submitCreateForm()">Add
										Lesson
									</v-btn>
								</v-form>
							</v-card-text>
						</v-card>
					</v-dialog>
				</div>
			</v-col>
		</v-row>

		<v-row>
			<v-col>
				<div v-if="this.data && this.data.length > 0">
					<Schedule :time-ground="['08:00', '20:00']"
						:color="['#774ED8','#4996C8','#6EB35E','#ECD03F','#F39C3C', '#EA5555']"
						:week-ground="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
						:task-detail="[mon, tue, wed, thu, fri, sat, sun]">
					</Schedule>
				</div>
			</v-col>
		</v-row>

		<v-row>
			<v-col>
				<div>
					<v-simple-table>
						<template v-slot:default>
							<thead>
								<tr>
									<th class="text-left">
										Lesson
									</th>
									<th class="text-left">
										Day
									</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="lesson in lessons" :key="lesson.id">
									<td>{{ lesson.title }}</td>
									<td>{{ lesson.day }}
										<v-btn @click="deleteLesson(lesson._id)" class="float-right" color="error">
											<v-icon left>
												mdi-delete
											</v-icon>
											Delete
										</v-btn>
										<v-dialog v-model="dialog" width="500">
											<template v-slot:activator="{ on, attrs }">
												<v-btn @click="editLesson(lesson._id)" v-bind="attrs" v-on="on"
													class="float-right" color="success">
													<v-icon left>
														mdi-pencil
													</v-icon>
													Edit
												</v-btn>
											</template>
											<v-card elevation="12">
												<br>
												<v-card-text>
													<v-form>
														<v-text-field v-model="editform.title" label="Title" name="title"
															type="text" class="rounded-2" outlined></v-text-field>
														<v-textarea v-model="editform.detail" label="Detail" name="detail"
															type="text" class="rounded-2" outlined></v-textarea>
														<v-select v-model="editform.day" :items="items" item-value="day"
															item-text="name" label="Day">
														</v-select>
														<h2>Start Time:</h2>
														<v-time-picker v-model="editform.dateStart" format="24hr">
														</v-time-picker>
														<h2>End Time:</h2>
														<v-time-picker v-model="editform.dateEnd" format="24hr">
														</v-time-picker>
														<v-btn class="rounded-2" color="black" x-large block dark
															@click="submitEditForm()">
															Edit Lesson
														</v-btn>
													</v-form>
												</v-card-text>
											</v-card>
										</v-dialog>
									</td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
				</div>
			</v-col>
		</v-row>
	</v-container>




</template>

<script>
	import axios from '@/config'

	export default {
		name: 'Timetable',
		components: {},
		data() {
			return {
				dialog: false,
				lessons: null,
				data: [],
				mon: [],
				tue: [],
				wed: [],
				thu: [],
				fri: [],
				sat: [],
				sun: [],
				items: [{
						name: 'Monday',
						day: 'mon'
					},
					{
						name: 'Tuesday',
						day: 'tue'
					},
					{
						name: 'Wednesday',
						day: 'wed'
					},
					{
						name: 'Thusday',
						day: 'thu'
					},
					{
						name: 'Friday',
						day: 'fri'
					},
					{
						name: 'Saturday',
						day: 'sat'
					},
					{
						name: 'Sunday',
						day: 'sun'
					},
				],
				form: {
					title: '',
					detail: '',
					day: '',
					dateStart: '',
					dateEnd: '',
				},
				editform: {
					id: '',
					title: '',
					detail: '',
					day: '',
					dateStart: '',
					dateEnd: '',
				}
			}
		},
		beforeCreate() {
			let token = localStorage.getItem('token')
			let user_id = localStorage.getItem('user_id')

			axios
				.get(`/lessons/user/${user_id}`, {
					headers: {
						"Authorization": `Bearer ${token}`
					}
				})
				.then(response => {
					this.lessons = (response.data)

					this.mon = (response.data).filter(lesson => {
						return lesson.day === "mon"
					})
					this.tue = (response.data).filter(lesson => {
						return lesson.day === "tue"
					})
					this.wed = (response.data).filter(lesson => {
						return lesson.day === "wed"
					})
					this.thu = (response.data).filter(lesson => {
						return lesson.day === "thu"
					})
					this.fri = (response.data).filter(lesson => {
						return lesson.day === "fri"
					})
					this.sat = (response.data).filter(lesson => {
						return lesson.day === "sat"
					})
					this.sun = (response.data).filter(lesson => {
						return lesson.day === "sun"
					})
					this.data = [this.mon, this.tue, this.wed, this.thu, this.fri, this.sat, this.sun]
				})
				.catch(error => console.log(error))
		},
		methods: {
			submitCreateForm() {
				let token = localStorage.getItem('token')
				let user_id = localStorage.getItem('user_id')

				axios.post('/lessons', {
						user_id: user_id,
						title: this.form.title,
						detail: this.form.detail,
						day: this.form.day,
						dateStart: this.form.dateStart,
						dateEnd: this.form.dateEnd
					}, {
						headers: {
							"Authorization": `Bearer ${token}`
						}
					})
					.then(response => {
						console.log(response.data)
						location.reload()
					})
					.catch(error => {
						console.log(error)
						console.log(error.response.data)
						alert("There was a problem creating this lesson.")
					})
			},
			deleteLesson(id) {
				let token = localStorage.getItem('token')
				if (confirm("Do you really want to delete?")) {
					axios.delete(`/lessons/${id}`, {
							headers: {
								"Authorization": `Bearer ${token}`
							}
						})
						.then(response => {
							console.log(response.data)
							location.reload()
						})
						.catch(error => {
							console.log(error)
							alert("There was a problem deleting this lesson.")
						})
				}
			},
			editLesson(id) {
				let token = localStorage.getItem('token')

			axios
				.get(`/lessons/${id}`, {
					headers: {
						"Authorization": `Bearer ${token}`
					}
				})
				.then(response => {
					console.log(response.data)

					this.editform.id = response.data._id
					this.editform.title = response.data.title
					this.editform.detail = response.data.detail
					this.editform.day = response.data.day
					this.editform.dateStart = response.data.dateStart
					this.editform.dateEnd = response.data.dateEnd
				})
				.catch(error => console.log(error))
			},

			submitEditForm() {
				let token = localStorage.getItem('token')
				let user_id = localStorage.getItem('user_id')

				axios.put(`/lessons/${this.editform.id}`, {
						user_id: user_id,
						title: this.editform.title,
						detail: this.editform.detail,
						day: this.editform.day,
						dateStart: this.editform.dateStart,
						dateEnd: this.editform.dateEnd
					}, {
						headers: {
							"Authorization": `Bearer ${token}`
						}
					})
					.then(response => {
						console.log(response.data)
						location.reload()
					})
					.catch(error => {
						console.log(error)
						console.log(error.response.data)
						alert("There was a problem editing this lesson.")
					})
			}
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Jockey+One&display=swap');

	.main-header {
		font-size: 63px;
		font-family: 'Jockey One', sans-serif;

	}

	.task-list {
		list-style: none;
	}

	.task-list-item {
		list-style: none;
		-webkit-transform: translateX(-25px);
		width: 13.5% !important;
		border-style: solid;
		border-color: #102D38;
	}

	.task-list-item p {
		color: #F7F4EA;
	}

	.task-list-item h3 {
		color: #F7F4EA;
	}

	.time-ground ul li {
		list-style: none;
	}
</style>