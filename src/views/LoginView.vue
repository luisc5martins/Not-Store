<script setup>
import '@passageidentity/passage-elements/passage-auth';
</script>

<template>
  <h1>Login</h1>
  <div class="authContainer">
    <passage-auth
      app-id="MSiJdUpr0UlU6w7lObqbFayU"
    ></passage-auth>
  </div>
</template>

<style>
.title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  margin-top: 0;
}
.form {
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  gap: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #333;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #ddd;
  }
}
.list {
 justify-content: center;
 vertical-align: middle;
 text-align: center;
}
</style>