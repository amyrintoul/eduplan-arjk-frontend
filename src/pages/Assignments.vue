 <template>
 <v-container>
    <h1>Assignments</h1>
    <v-row>
      <v-col>
        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                Add Assignment
              </v-btn>
            </template>
            <v-card elevation="12">
              <br>
              <v-card-text>
                <v-form>
                  <v-select v-model="form.subject_id" :items="subjects" item-value="_id" item-text="title"
                    label="Subject">
                  </v-select>
                  <v-text-field v-model="form.title" label="Title" name="title" type="text" class="rounded-2" outlined>
                  </v-text-field>
                  <v-textarea v-model="form.description" label="Description" name="description" type="text"
                    class="rounded-2" outlined></v-textarea>
                  <h2>Due Date:</h2>
                  <v-date-picker v-model="form.due_date"></v-date-picker>
                  <v-text-field v-model="form.grade_percent" label="Grade Percent" name="grade_percent" type="text"
                    class="rounded-2" outlined></v-text-field>
                  <v-text-field v-model="form.grade" label="Grade" name="grade" type="text" class="rounded-2" outlined>
                  </v-text-field>
                  <v-btn class="rounded-2" color="black" x-large block dark @click="submitCreateForm()">Add
                    Assignment
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
                  <td>{{ assignment.grade }}
                    <v-btn @click="deleteAssignment(assignment._id)" class="float-right" color="error">
                      <v-icon left>
                        mdi-delete
                      </v-icon>
                      Delete
                    </v-btn>
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn @click="editAssignment(assignment._id)" v-bind="attrs" v-on="on" class="float-right"
                          color="success">
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
                            <v-select v-model="editform.subject_id" :items="subjects" item-value="_id" item-text="title"
                              label="Subject">
                            </v-select>
                            <v-text-field v-model="editform.title" label="Title" name="title" type="text" class="rounded-2"
                              outlined>
                            </v-text-field>
                            <v-textarea v-model="editform.description" label="Description" name="description" type="text"
                              class="rounded-2" outlined></v-textarea>
                            <h2>Due Date:</h2>
                            <v-date-picker v-model="editform.due_date"></v-date-picker>
                            <v-text-field v-model="editform.grade_percent" label="Grade Percent" name="grade_percent"
                              type="text" class="rounded-2" outlined></v-text-field>
                            <v-text-field v-model="editform.grade" label="Grade" name="grade" type="text" class="rounded-2"
                              outlined>
                            </v-text-field>
                            <v-btn class="rounded-2" color="black" x-large block dark @click="submitEditForm()">
                              Edit Assignment
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
    name: 'Exams',
    components: {},
    data() {
      return {
        dialog: false,
        assignments: null,
        subjects: null,
        form: {
          subject_id: '',
          title: '',
          description: '',
          due_date: '',
          grade_percent: '',
          grade: '',
        },
        editform: {
          id: '',
          subject_id: '',
          title: '',
          description: '',
          due_date: '',
          grade_percent: '',
          grade: '',
        }
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
    },
    mounted() {
      let token = localStorage.getItem('token')
      axios
        .get(`/subjects`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        .then(response => {
          console.log(response.data)
          this.subjects = response.data
        })
        .catch(error => console.log(error))
    },
    methods: {
      submitCreateForm() {
        let token = localStorage.getItem('token')
        let user_id = localStorage.getItem('user_id')

        axios.post('/assignments', {
            user_id: user_id,
            done: false,
            subject_id: this.form.subject_id,
            title: this.form.title,
            description: this.form.description,
            due_date: this.form.due_date,
            grade_percent: this.form.grade_percent,
            grade: this.form.grade
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
      deleteAssignment(id) {
        let token = localStorage.getItem('token')
        if (confirm("Do you really want to delete?")) {
          axios.delete(`/assignments/${id}`, {
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
              alert("There was a problem deleting this assignment.")
            })
        }
      },
      editAssignment(id) {
        let token = localStorage.getItem('token')

        axios
          .get(`/assignments/${id}`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          .then(response => {
            console.log(response.data)

            this.editform.id = response.data._id,
              this.editform.subject_id = response.data.subject_id,
              this.editform.title = response.data.title,
              this.editform.description = response.data.description,
              this.editform.due_date = response.data.due_date,
              this.editform.grade_percent = response.data.grade_percent,
              this.editform.grade = response.data.grade
          })
          .catch(error => console.log(error))
      },

      submitEditForm() {
        let token = localStorage.getItem('token')
        let user_id = localStorage.getItem('user_id')

        axios.put(`/assignments/${this.editform.id}`, {
            user_id: user_id,
            done: false,
            subject_id: this.editform.subject_id,
            title: this.editform.title,
            description: this.editform.description,
            due_date: this.editform.due_date,
            grade_percent: this.editform.grade_percent,
            grade: this.editform.grade
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
            alert("There was a problem editing this assignment.")
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
</style>
