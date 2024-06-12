<template>
  <div class="domain-card">
    <div class="icon">
      <img src="./../assets/location.png" alt="Domain Icon" />
    </div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
      <button class="button">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'Семпл текста' },
    description: { type: String, default: 'Описание' },
    buttonText: { type: String, default: 'Click' }
  }
};
</script>


<style>
.domain-card {
  background-color: #f4f9fd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: 300px;
  max-height: 200px;
  margin-right: 20px;
  margin-bottom: 30px;
  flex-basis: 33%;
}

.icon img {
  width: 50px;
  height: 50px;
}

.content {
  margin-top: 10px;
}

.title {
  font-size: 1.5em;
  color: #33394c;
  margin: 10px 0;
}

.description {
  font-size: 1em;
  color: #33394c;
  margin: 10px 0;
}

.button {
  background-color: #ed3153;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
}

.button:hover {
  background-color: #d02a44;
}
</style>
