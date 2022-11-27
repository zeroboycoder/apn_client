<template>
  <div
    :style="{
      paddingTop: '60px',
      backgroundColor: '#F5F4F8',
    }"
  >
    <v-container>
      <v-row class="pt-10 pb-5">
        <!-- Title Card -->
        <v-col cols="12" sm="8" class="title_card">
          <v-card class="pa-7 pt-5">
            <h1>Fundamentals of Python Programming</h1>
            <!-- Course duration and Level -->
            <v-row
              class="pb-3"
              :style="{
                'font-size': '14px',
                color: 'var(--simbolo_gray)',
              }"
            >
              <v-col class="d-flex align-center">
                <v-icon size="16">mdi-clock-outline</v-icon>
                <p class="ml-1">2 months</p>
                <img
                  class="ml-3"
                  :src="require('../assets/imgs/beginner_level.svg')"
                  alt="Course level"
                />
                <p class="ml-1">Beginner</p>
              </v-col>
            </v-row>
            <!-- Instructor -->
            <div class="d-flex align-center mt-3 title_card_instructor">
              <v-avatar
                :image="require('../assets/imgs/instructors/htethtetmon.jpg')"
                size="56"
                class="mr-3"
              ></v-avatar>
              <div>
                <h2>Instructor - Htet Htet Mon</h2>
                <p>Information Technology</p>
              </div>
            </div>
            <div>
              <v-divider class="mt-7" />
            </div>
            <!-- Tab -->
            <v-tabs
              v-model="tab"
              color="#ca4343"
              :style="{
                'font-size': '14px',
                textTransform: 'none',
              }"
            >
              <v-tab value="one">Description</v-tab>
              <v-tab value="two">Instructor</v-tab>
            </v-tabs>
          </v-card>
          <v-card class="pa-7 pt-5 mt-5">
            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="one">
                  <div class="tab_body">
                    <!-- Course Description -->
                    <div>
                      <h2
                        :style="{
                          font: '600 20px sans-serif',
                        }"
                      >
                        Course Descriptions
                      </h2>
                      <p>
                        ဒီသင်တန်းမှာဆိုရင်တော့ python
                        နဲ့ပတ်သက်တဲ့အခြေခံတွေကိုသေချာလေ့လာရမှာဖြစ်ပါတယ် python
                        programming language language ရဲ့ syntax structure
                        တွေကိုreal-world
                        နဲ့သက်ဆိုင်တဲ့ဥပမာများပေးကာရှင်းပြထားပါတယ် ထို့နောက်
                        python ကိုအသုံးပြုပြီး
                        အခြားသောနည်းပညာအသစ်များက်ုလေ့လာနိုင်ရန်လည်းရည်ရွယ်ပါတယ်
                      </p>
                      <p>
                        Python is widely regarded as a programming language
                        that's easy to learn, due to its simple syntax. It is a
                        popular programming language, among startups and
                        enterprises, and therefore Python skills are in high
                        demand.
                      </p>
                    </div>
                    <!-- Objective -->
                    <div class="mt-7">
                      <h2
                        :style="{
                          font: '600 16px sans-serif',
                        }"
                      >
                        The objectives of the courses are
                      </h2>
                      <v-row>
                        <v-col sm="12" md="6">
                          <p class="d-flex">
                            <v-icon color="green" size="16" class="mt-1 mr-2">
                              mdi-check-circle-outline
                            </v-icon>
                            <span>
                              To understand and acquire the foundational
                              knowledge of Python Programming
                            </span>
                          </p>
                          <p class="d-flex">
                            <v-icon color="green" size="16" class="mt-1 mr-2">
                              mdi-check-circle-outline
                            </v-icon>
                            <span>
                              To be able to read and write Python Programming
                              Easily
                            </span>
                          </p>
                        </v-col>
                        <v-col sm="12" md="6">
                          <p class="d-flex">
                            <v-icon color="green" size="16" class="mt-1 mr-2">
                              mdi-check-circle-outline
                            </v-icon>
                            <span>
                              To provide teamwork skills by playing quiz games,
                              and solving the programming problems with team
                            </span>
                          </p>
                          <p class="d-flex">
                            <v-icon color="green" size="16" class="mt-1 mr-2">
                              mdi-check-circle-outline
                            </v-icon>
                            <span>
                              To support further career development that is
                              related with Python
                            </span>
                          </p>
                        </v-col>
                      </v-row>
                    </div>
                    <!-- Conclusion -->
                    <div class="mt-4">
                      <p>
                        It is one of the top programming languages according to
                        the record of 2020. Python is widely used in many
                        applications like Web Development, Artificial
                        Intelligence, Mobile Development, Data Science, and
                        others.
                      </p>
                      <p>Let's start your first step with Simbolo.</p>
                    </div>
                  </div>
                </v-window-item>
                <v-window-item value="two">
                  <div class="tab_body">
                    <!-- Instructor Avatar -->
                    <div class="d-flex align-center">
                      <v-avatar
                        :image="
                          require('../assets/imgs/instructors/htethtetmon.jpg')
                        "
                        size="80"
                        class="mr-3"
                      />
                      <div>
                        <h2
                          :style="{
                            fontSize: '18px',
                          }"
                        >
                          Htet Htet Mon
                        </h2>
                        <p
                          :style="{
                            marginTop: '3px',
                          }"
                        >
                          Information Technology
                        </p>
                      </div>
                    </div>
                    <!-- About Instructor -->
                    <div class="mt-5">
                      <h2
                        :style="{
                          fontSize: '18px',
                        }"
                      >
                        About instructor
                      </h2>
                      <p>
                        I am a final year student attending Technological
                        University(Kyaukse). My specialized major is Information
                        Technology, especially in Artificial Intelligence. I
                        mainly focus on natural language processing and computer
                        vision. Now, I am working as a team executive at That
                        Pan Hub of AI Research and Development Team. I am also
                        working as Technical and Content lead at WAI Myanmar
                        Community. My current projects are leading to the
                        Natural Language Processing in Myanmar Language. My AI
                        journey is starting in 2019 and it’s been four years
                        now.
                      </p>
                    </div>
                  </div>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-expansion-panels>
            <v-expansion-panel
              title="Introduction to Python language"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
            <v-expansion-panel
              title="Values and Variables"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
            <v-expansion-panel
              title="Expression and Arithmetic"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
            <v-expansion-panel
              title="Condition Execution"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
            <v-expansion-panel
              title="Iteration loops"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
            <v-expansion-panel
              title="Functions"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
            <v-expansion-panel
              title="Data Structure"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
            >
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return { tab: 2 };
  },
};
</script>

<style scoped>
.title_card h1 {
  font: bold 2rem/3.5rem made_tommy_bold;
  letter-spacing: -0.3px;
}
.title_card_instructor h2 {
  font: bold 16px sans-serif;
  letter-spacing: 0.3pxs;
}
.title_card_instructor p {
  width: fit-content;
  margin-top: 5px;
  padding: 4px 6px;
  color: white;
  background-color: #29baf9;
  border-radius: 5px;
  font: normal 12px sans-serif;
}

/* Tab */
.tab_body p {
  color: var(--simbolo_gray);
  margin: 10px 0;
  font: normal 14px sans-serif;
  line-height: 1.5;
}
</style>