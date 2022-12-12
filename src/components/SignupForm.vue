// TODO: Lam Nguyen Hoang
<template>
    <form>
        <label>Email:</label>
        <input type="email" required v-model="email" />

        <label>Password:</label>
        <input type="password" required v-model="password" />

        <label>Gender:</label>
        <select v-model="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
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
</style>
