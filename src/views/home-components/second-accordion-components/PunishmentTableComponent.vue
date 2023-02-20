<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
        class="accordion-button collapsed"
        style="background-color: #fcfcfd"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseOne"
      >
        جدول الجزاءات
      </button>
    </h2>
    <!-- show -->
    <div
      id="panelsStayOpen-collapseOne"
      class="accordion-collapse hide collapse"
      aria-labelledby="panelsStayOpen-headingOne"
    >
      <div class="accordion-body">
        <form @submit.prevent>
          <!-- =====  1-->
          <table v-show="btnGetIndexes == 1" class="table">
            <tbody>
              <tr>
                <th scope="row">إسم عضو الفريق {{ btnGetIndexes }}</th>
                <td class="team-player-name">
                  <input
                    placeholder="required"
                    :class="
                      punishes.playerName != '' ? 'bg-white' : 'border-danger'
                    "
                    v-model="punishes.playerName"
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">الرقم</th>
                <td>
                  <input v-model="punishes.playerNum" type="number" />
                </td>
              </tr>
              <tr>
                <th scope="row">النادى</th>
                <td><input v-model="punishes.playerClub" type="text" /></td>
              </tr>
              <tr>
                <th scope="row">نوع العقوبة</th>
                <td><input v-model="punishes.PunishKind" type="text" /></td>
              </tr>
            </tbody>
            <!-- second punishment inputs table -->
            <!-- table 2 -->
          </table>
          <!-- ===== 2 -->
          <table v-show="btnGetIndexes == 2" class="table">
            <tbody>
              <tr>
                <th scope="row">إسم عضو الفريق {{ btnGetIndexes }}</th>
                <td class="team-player-name">
                  <input
                    placeholder="required"
                    :class="
                      punishes2.playerName != '' ? 'bg-white' : 'border-danger'
                    "
                    v-model="punishes2.playerName"
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">الرقم</th>
                <td><input v-model="punishes2.playerNum" type="number" /></td>
              </tr>
              <tr>
                <th scope="row">النادى</th>
                <td><input v-model="punishes2.playerClub" type="text" /></td>
              </tr>
              <tr>
                <th scope="row">نوع العقوبة</th>
                <td><input v-model="punishes2.PunishKind" type="text" /></td>
              </tr>
            </tbody>
          </table>

          <!-- table 3 -->
          <table v-show="btnGetIndexes == 3" class="table">
            <tbody>
              <tr>
                <th scope="row">إسم عضو الفريق {{ btnGetIndexes }}</th>
                <td class="team-player-name">
                  <input
                    placeholder="required"
                    :class="
                      punishes3.playerName != '' ? 'bg-white' : 'border-danger'
                    "
                    v-model="punishes3.playerName"
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">الرقم</th>
                <td><input v-model="punishes3.playerNum" type="number" /></td>
              </tr>
              <tr>
                <th scope="row">النادى</th>
                <td><input v-model="punishes3.playerClub" type="text" /></td>
              </tr>
              <tr>
                <th scope="row">نوع العقوبة</th>
                <td><input v-model="punishes3.PunishKind" type="text" /></td>
              </tr>
            </tbody>
          </table>
          <!-- table 4-->
          <table v-show="btnGetIndexes == 4" class="table">
            <tbody>
              <tr>
                <th scope="row">إسم عضو الفريق {{ btnGetIndexes }}</th>
                <td class="team-player-name">
                  <input
                    placeholder="required"
                    :class="
                      punishes4.playerName != '' ? 'bg-white' : 'border-danger'
                    "
                    v-model="punishes4.playerName"
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">الرقم</th>
                <td><input v-model="punishes4.playerNum" type="number" /></td>
              </tr>
              <tr>
                <th scope="row">النادى</th>
                <td><input v-model="punishes4.playerClub" type="text" /></td>
              </tr>
              <tr>
                <th scope="row">نوع العقوبة</th>
                <td><input v-model="punishes4.PunishKind" type="text" /></td>
              </tr>
            </tbody>
          </table>
          <!-- table 5-->
          <table v-show="btnGetIndexes == 5" class="table">
            <tbody>
              <tr>
                <th scope="row">إسم عضو الفريق {{ btnGetIndexes }}</th>
                <td class="team-player-name">
                  <input
                    placeholder="required"
                    :class="
                      punishes5.playerName != '' ? 'bg-white' : 'border-danger'
                    "
                    v-model="punishes5.playerName"
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">الرقم</th>
                <td><input v-model="punishes5.playerNum" type="number" /></td>
              </tr>
              <tr>
                <th scope="row">النادى</th>
                <td><input v-model="punishes5.playerClub" type="text" /></td>
              </tr>
              <tr>
                <th scope="row">نوع العقوبة</th>
                <td><input v-model="punishes5.PunishKind" type="text" /></td>
              </tr>
            </tbody>
          </table>
          <!-- table 6-->
          <table v-show="btnGetIndexes == 6" class="table">
            <tbody>
              <tr>
                <th scope="row">إسم عضو الفريق {{ btnGetIndexes }}</th>
                <td class="team-player-name">
                  <input
                    placeholder="required"
                    :class="
                      punishes6.playerName != '' ? 'bg-white' : 'border-danger'
                    "
                    v-model="punishes6.playerName"
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">الرقم</th>
                <td><input v-model="punishes6.playerNum" type="number" /></td>
              </tr>
              <tr>
                <th scope="row">النادى</th>
                <td><input v-model="punishes6.playerClub" type="text" /></td>
              </tr>
              <tr>
                <th scope="row">نوع العقوبة</th>
                <td><input v-model="punishes6.PunishKind" type="text" /></td>
              </tr>
            </tbody>
          </table>

          <div class="d-flex justify-content-center flex-row-reverse">
            <button
              v-for="(btnNum, i) in btnNumbers"
              :key="i"
              class="btn btn-secondary mx-1 btn-num"
              @click="sendBtnNum(i)"
            >
              {{ i + 1 }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PunishmentTableComponent",
  created() {
    // this for edit and print pages
    if (sessionStorage.getItem("punishes")) {
      this.punishes = JSON.parse(sessionStorage.getItem("punishes"));
    } else {
      sessionStorage.setItem("punishes", JSON.stringify(this.punishes));
    }
    if (sessionStorage.getItem("punishes2")) {
      this.punishes2 = JSON.parse(sessionStorage.getItem("punishes2"));
    } else {
      sessionStorage.setItem("punishes2", JSON.stringify(this.punishes2));
    }
    if (sessionStorage.getItem("punishes3")) {
      this.punishes3 = JSON.parse(sessionStorage.getItem("punishes3"));
    } else {
      sessionStorage.setItem("punishes3", JSON.stringify(this.punishes3));
    }
    if (sessionStorage.getItem("punishes4")) {
      this.punishes4 = JSON.parse(sessionStorage.getItem("punishes4"));
    } else {
      sessionStorage.setItem("punishes4", JSON.stringify(this.punishes4));
    }
    if (sessionStorage.getItem("punishes5")) {
      this.punishes5 = JSON.parse(sessionStorage.getItem("punishes5"));
    } else {
      sessionStorage.setItem("punishes5", JSON.stringify(this.punishes5));
    }
    if (sessionStorage.getItem("punishes6")) {
      this.punishes6 = JSON.parse(sessionStorage.getItem("punishes6"));
    } else {
      sessionStorage.setItem("punishes6", JSON.stringify(this.punishes6));
    }
  },
  mounted() {},

  data() {
    return {
      btnNumbers: [1, 2, 3, 4, 5, 6],
      btnGetIndexes: 1,
      punishes: {
        playerName: "",
        playerNum: "",
        playerClub: "",
        PunishKind: "",
      },
      punishes2: {
        playerName: "",
        playerNum: "",
        playerClub: "",
        PunishKind: "",
      },
      punishes3: {
        playerName: "",
        playerNum: "",
        playerClub: "",
        PunishKind: "",
      },
      punishes4: {
        playerName: "",
        playerNum: "",
        playerClub: "",
        PunishKind: "",
      },
      punishes5: {
        playerName: "",
        playerNum: "",
        playerClub: "",
        PunishKind: "",
      },
      punishes6: {
        playerName: "",
        playerNum: "",
        playerClub: "",
        PunishKind: "",
      },
    };
  },
  watch: {
    // Watch for changes in the DateTimeForm object
    punishes: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem("punishes", JSON.stringify(newValue));
      },
    },
    punishes2: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem("punishes2", JSON.stringify(newValue));
      },
    },
    punishes3: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem("punishes3", JSON.stringify(newValue));
      },
    },
    punishes4: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem("punishes4", JSON.stringify(newValue));
      },
    },
    punishes5: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem("punishes5", JSON.stringify(newValue));
      },
    },
    punishes6: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem("punishes6", JSON.stringify(newValue));
      },
    },
  },
  methods: {
    sendBtnNum(btnIndex) {
      let btnGetIndex = btnIndex + 1;
      this.btnGetIndexes = btnGetIndex;
    },
  },
};
</script>
