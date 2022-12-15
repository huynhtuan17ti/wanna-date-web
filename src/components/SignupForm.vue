// TODO: Lam Nguyen Hoang
<template>
    <form>
        <label>Email:</label>
        <input type="email" required v-model="email" />

        <label>Password:</label>
        <input type="password" required v-model="password" />

        <label>Confirm Password:</label>
        <input type="password" required v-model="confirmPassword" />

        <label>Full Name:</label>
        <input type="text" required v-model="fullName" />

        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" />

        <label>Gender:</label>
        <select v-model="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

        <label>Sexual Orientation:</label>
        <select v-model="gender">
            <option value="straigt">Straigt</option>
            <option value="gay">Gay</option>
            <option value="lesbian">Lesbian</option>
            <option value="bisexual">Bisexual</option>
        </select>

        <div class="submit" @submit.prevent="handleSubmit">
            <button>Register</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            gender: '',
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.email, this.password)
        },
    },
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 20px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
button {
    background: #ffffff;
    border-width: 2px;
    border-color: #ff724c;
    border-style: solid;
    box-shadow: none;
    width: 100%;
    padding: 10px 20px;
    margin-top: 50px;
    color: #ff724c;
    font-size: 1em;
    font-weight: bold;
    border-radius: 10px;
}
</style>
