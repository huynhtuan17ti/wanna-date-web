<template>
    <form>
        <h2 class="welcome">Welcome to Wanna Date</h2>
        <label>Email:</label>
        <input type="email" required v-model="email" />

        <label>Password:</label>
        <input type="password" required v-model="password" />

        <div class="submit" @submit.prevent="handleSubmit">
            <button>Login</button>
        </div>
        <div @click="onClickRegisterRouting()">
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
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.email, this.password)
        },
        onClickRegisterRouting() {
            this.$router.push('/register')
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
input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    margin-bottom: 30px;
}
button {
    background: #ffffff;
    border-width: 2px;
    border-color: #ff724c;
    border-style: solid;
    box-shadow: none;
    width: 100%;
    padding: 10px 20px;
    margin-top: 10px;
    color: #ff724c;
    font-size: 1em;
    font-weight: bold;
    border-radius: 10px;
}
.welcome {
    text-align: center;
    color: #ff724c;
    margin-bottom: 50px;
}
.submit {
    text-align: center;
}
</style>
