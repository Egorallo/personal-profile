<template>
  <div class="app-container">
    <nav class="main-nav">
      <div class="nav-header">
        <div class="logo">
          <img src="./assets/logo_another.png" alt="Logo" class="icon-logo">
        </div>
      </div>
      <ul class="nav-list">
        <li class="nav-item active">
          <RouterLink :to="{ name: 'home' }">Стартовая страница</RouterLink>
        </li>
      </ul>
      <ul class="nav-list">
        <li class="nav-title">Документы</li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'invoice' }">Счета</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'acts' }">Акты</RouterLink>
        </li>
      </ul>
      <ul class="nav-list">
        <li class="nav-title">Услуги</li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'domains' }">Домены</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'hosting' }">Хостинг</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'cloud' }">Облачные решения</RouterLink>
        </li>
      </ul>
      <ul class="nav-list">
        <li class="nav-title">Поддержка</li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'support' }">Список обращений</RouterLink>
        </li>
      </ul>
      <ul class="nav-list">
        <li class="nav-title">Партнерам</li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'partners' }">Партнерская программа</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
};
</script>


<style>
.main-nav,
.main-nav .nav-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 220px;
  background-color: #33394c;

}

.main-nav {
  bottom: 0;
  min-height: 100vh;
  height: 100%;
  overflow: auto;
  padding-bottom: 20px;
}

.main-nav .nav-header {
  padding-top: 10px;

}

.logo {
  width: 100px;
  height: 36px;
  padding-left: 40px;
  margin-left: -35px;
  position: relative;
}

.icon-logo {
  width: 120px;
  height: 44px;
}

.main-nav .nav-header+.nav-list {
  margin-top: 95px;
}

.main-nav .nav-list {
  list-style: none;
  margin: 40px 0;
  font-family: Open Sans, Helvetica, Arial, sans-serif;
}

.main-nav .nav-list .nav-item a {
  font-size: 14px;
}

.router-link-active,
.router-link-exact-active {
  border-left: 4px solid #ed3153;
}

.nav-item a {
  color: whitesmoke;
  display: block;
  padding: 10px 15px;
  text-decoration: none;
}

.main-nav .nav-list .nav-title {
  font-size: 14px;
  color: hsla(0, 0%, 100%, .4);
}

.nav-title,
.nav-item {
  margin-bottom: 5px;
}

.nav-item {
  position: relative;
}

.nav-list {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: transparent;
  transition: background-color 0.3s;
}

.nav-title {
  margin-left: 15px
}

.app-container {
  display: flex;
  height: 100%;
}

.main-content {
  margin-left: 250px;
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>
