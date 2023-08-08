<template>
    <div id="app">
        <form @submit.prevent="submitForm">
            <label for="fullname">Full Name:</label><br>
            <input type="text" v-model="fullname" id="fullname" name="fullname">

            <br><br>

            <label for="institution">Institution</label><br>
            <input type="text" v-model="institution" id="institution" name="institution">

            <br><br>

            <label for="faculty">Faculty</label><br>
            <select v-model="faculty" name="faculty" id="faculty">
                <option value="" disabled>Select Faculty</option>
                <option value="F-SCIENTICS">FACULTY OF SCIENCE AND DATA ANALYTICS (F-SCIENTICS)</option>
                <option value="F-MARTECH">FACULTY OF MARINE TECHNOLOGY (F-MARTECH)</option>
                <option value="F-INDSYS">FACULTY OF INDUSTRIAL TECHNOLOGY AND SYSTEMS ENGINEERING (F-INDSYS)</option>
                <option value="F-ELECTICS">FACULTY OF INTELLIGENT ELECTRICAL AND INFORMATICS TECHNOLOGY (F-ELECTICS)
                </option>
                <option value="F-CIVPLAN">FACULTY OF CIVIL, PLANNING, AND GEO ENGINEERING (F-CIVPLAN)</option>
                <option value="F-CREABIZ">FACULTY OF CREATIVE DESIGN AND DIGITAL BUSINESS (F-CREABIZ)</option>
                <option value="F-MEDICS">FACULTY OF MEDICINE AND HEALTH</option>
                <option value="Other Faculty">Other Faculty</option>
            </select>

            <br><br>

            <label for="other_faculty">Other Faculty</label><br>
            <input type="text" v-model="other_faculty" id="other_faculty" name="other_faculty">
            <div class="info">*If you are from ITS, please fill in the blank with a dash "-".</div>

            <br>

            <label for="major">Major</label><br>
            <input type="text" v-model="major" id="major" name="major">

            <br><br>

            <label for="events">Events</label><br>
            <select v-model="events" name="events" id="events">
                <option value="" disabled>Select Event</option>
                <option value="AMPPeduli">AMPPeduli</option>
                <option value="AMPP WORKSHOP 1.0: PIPELINE WELDING IN OIL AND GAS INDUSTRY">AMPP WORKSHOP 1.0: PIPELINE
                    WELDING IN OIL AND GAS INDUSTRY</option>
                <option value="POSTMAN (AMPP GOES TO COMPANY)">POSTMAN (AMPP GOES TO COMPANY)</option>
            </select>

            <br><br>

            <label for="Requirements">Requirements</label><br>
            <input type="file" ref="fileInput" @change="handleFileChange">

            <br><br>

            <input type="submit" value="Submit">
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            fullname: '',
            institution: '',
            faculty: '',
            other_faculty: '',
            major: '',
            events: '',
            selectedFile: null,
        };
    },
    methods: {
        handleFileChange(event) {
            this.selectedFile = event.target.files[0];
        },

        submitForm(event) {

            event.preventDefault()

            const formData = new FormData();
            formData.append('file', this.selectedFile);
            formData.append('fullname', this.fullname);
            formData.append('institution', this.institution);
            formData.append('faculty', this.faculty);
            formData.append('other_faculty', this.other_faculty);
            formData.append('major', this.major);
            formData.append('events', this.events);

            // Make the HTTP POST request
            axios.post('http://localhost:3000/api/posts/store', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log(response.data);
                    // Handle the response from the backend if needed
                    // For example, display a success message or redirect to another page

                    // Show the personalized SweetAlert message
                    Swal.fire({
                        title: `Hi, ${this.fullname}!`,
                        text: 'Thank you for registering',
                        icon: 'success',
                    });

                    this.resetForm();
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle errors if necessary
                });
        },

        resetForm() {
            // Reset the form fields to their initial values
            this.fullname = '';
            this.institution = '';
            this.faculty = '';
            this.other_faculty = '';
            this.major = '';
            this.events = '';
            this.$refs.fileInput.value = '';
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');


* {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}

div #app {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

div #app .info {
    color: gray;
}
</style>