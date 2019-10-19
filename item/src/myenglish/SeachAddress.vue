<template>
  <div class="seachAddress">
    <div class="title">
      <img src="./img/箭头.png" alt="" class="arrows" @click="cutCity">
      <span class="city">{{cityName}}</span>
      <router-link :to="{path:'./changecity'}" class="cut">切换城市</router-link>
    </div>
    <div class="seek">
      <div>
        <input type="text" placeholder="输入学校、商务楼、地址" class="seekInput" v-model="inputInfo">
      </div>
      <div class="sub" @click="submitInfo">提交</div>
    </div>
    <div class="seachHis" v-if="seachhis">搜索历史</div>
    <div>
      <div v-if="searchlist">
        <router-link v-for="(v,i) in minute" :key="i" class="list"
                     :to="{name:'j',query:{geo:v.geohash,lon:v.longitude,lat:v.latitude}}"
                     @click.native="savehistory(v,v.name)">
          <div class="listName">{{v.name}}</div>
          <div class="listAddress">{{v.address}}</div>
        </router-link>
      </div>
      <div v-if="historyrecord">
        <router-link v-for="(s,b) in history" :key="b" class="list"
                     :to="{name:'j',query:{geo:s.geohash,lon:s.longitude,lat:s.latitude}}">
          <div class="listName">{{s.name}}</div>
          <div class="listAddress">{{s.address}}</div>
        </router-link>
        <div class="clear" @click="clearHistory" v-if="historylist">清除所有</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SeachAddress",
    data() {
      return {
        cityName:"",
        cityId:"",
        inputInfo: "",
        netUrl: "http://elm.cangdu.org/v1/pois?type=search&city_id=",
        minute: [],
        his: [],
        history: [],
        searchlist: false,
        historyrecord: true,
        historylist: false,
        seachhis: true,
      }
    },
    created() {
      this.cityName = this.$route.query.city;
      this.cityId = this.$route.query.id;
      this.history = JSON.parse(localStorage.getItem('placeHistory'));
      if (localStorage.getItem("placeHistory")) {
        this.historylist = true
      }
    },
    methods: {
      cutCity() {
        this.$router.push({path: '/changecity'})
      },
      submitInfo() {
        let netUrlData = this.netUrl + this.cityId + "&keyword=" + this.inputInfo;
        this.axios.get(netUrlData).then((res) => {
          this.minute = res.data;
          this.searchlist = true;
          this.historyrecord = false;
          this.seachhis = false
        })
      },
      savehistory(a, b) {
        if (this.inputInfo != "") {
          // 表示localStorage没有placeHistory字段
          if (!localStorage.getItem("placeHistory")) {
            this.his.push(a);
          } else {// 表示localStorage有placeHistory字段
            this.his = JSON.parse(localStorage.getItem("placeHistory"));
            this.his.push(a)
          }
          localStorage.setItem("placeHistory", JSON.stringify(this.his))
        }
      },
      clearHistory() {
        this.his = [];
        this.history = [];
        window.localStorage.removeItem("placeHistory");
        this.historylist = false
      }
    }
  }
</script>

<style scoped>
  .seachAddress {
    width: 100%;
    height: 100%;
    background: rgb(245, 245, 245);
    animation: fae .5s;
    -webkit-animation:fae .5s;
    animation-fill-mode: forwards;
  }

  @keyframes  fae{
    0%{
      opacity: 0;
    }
    25%{
      opacity: 0.2;
    }
    50%{
      opacity: 0.5;
    }
    75%{
      opacity: 0.75;
    }
    100%{
      opacity: 1;
    }
  }
  .title {
    background: rgb(49, 144, 232);
    width: 100%;
    height: 2.8rem;
    overflow: hidden;
  }

  .title > img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    float: left;
    margin-top: 0.7rem;
    margin-left: 0.5rem;
  }

  .cut {
    color: white;
    display: inline-block;
    float: right;
    margin-top: 1rem;
    font-size: .8rem;
    margin-right: 0.8rem;
  }

  .city {
    font-size: 1.3rem;
    color: white;
    font-weight: 700;
    margin-left: 7.5rem;
    line-height: 2.8rem;
  }

  .seek {
    width: 100%;
    height: 7rem;
    background: white;
    margin-top: 0.8rem;
    box-sizing: border-box;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
  }

  .seekInput {
    width: 90%;
    margin-top: 0.8rem;
    margin-left: 5%;
    height: 2.5rem;
    font-size: 0.9rem;
    padding: 1rem 0 1rem 0.5rem;
    border: 1px solid #e4e4e4;
  }

  .seekInput:focus {
    outline: none;
  }

  .sub {
    width: 90%;
    background: rgb(49, 144, 232);
    margin-left: 5%;
    margin-top: 0.8rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    color: white;
    font-size: 1.05rem;
    border-radius: .15rem;
  }

  .list {
    display: block;
    background: white;
    border-bottom: 1px solid #e4e4e4;
    padding: .7rem .8rem .7rem 1rem;
  }

  .listName {
    font-size: 1rem;
  }

  .listAddress {
    font-size: 0.8rem;
    margin-top: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999;
  }

  .clear {
    width: 100%;
    background: white;
    height: 2.6rem;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .seachHis {
    font-size: 0.7rem;
    padding: .2rem 0 .2rem 1rem;
    border-bottom: 2px solid #e4e4e4;
  }
</style>
