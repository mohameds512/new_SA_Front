<template>
  <div class="our_wrapper_for_container_details">
    <!-- id="all_main_pdf_details_wrapper" -->
    <div class="btn_print">
      <br>
      {{ returnFloorsArea('تحت الارضي') }}
      <b-button
                variant="success"
                class="invoice-actions"
                block
                @click="printInvoice"
        >
            طباعة
        </b-button>
        <br>
        <!-- {{ submissionData.includes }} -->
        
    </div>
        
        
    <div class="main_pdf_details_wrapper">
      <!-- Start Section Part One  -->
      <section class="section_part_one">
        <div class="num_one">
          <img
            class="d-block w-100"
            src="@/assets/images/Picture1.png"
            alt="logo"
          />
        </div>
        <div class="num_two">
          <div class="wrap_a with_center_text">
            المخطط التفصيلي للعقار رقم (
            {{ handlerOfNullProperty(submissionData.building_number) }} )
            بـــمركز ( {{ handlerOfNullProperty(submissionData.center) }} )
            بمحافظة ( {{ handlerOfNullProperty(submissionData.government) }} )
            بمنطقة ( {{ handlerOfNullProperty(submissionData.zone) }} )
          </div>
          <div class="two one with_center_text">
            <span>نوع وثيقة التملك: </span> <span> {{handlerOfNullProperty(submissionData.contract_type)}}</span>
          </div>

          <div class="three one">
            <div class="with_border_left div_once text_with_over">
              <span>1. صك تملك</span>
            </div>
            <div class="main_par_num_text">
              <span
                >رقم (
                <span>
                  {{
                    handlerOfNullProperty(submissionData.contract_number)
                  }}</span
                >
                )</span
              >
              <span>فى</span>
              <span
                >(
                {{
                  handlerOfNullProperty(
                    submissionData.contract_date
                  )
                }}
                )</span
              >
            </div>
          </div>

          <div class="four one three">
            <div class="with_border_left div_once text_with_over">
              <span>2. حجة استحكام</span>
            </div>
            <div class="main_par_num_text">
              <span>رقم ( <span> ___ </span> )</span>
              <span>فى</span>
              <span>( ___ )</span>
            </div>
          </div>
          <div class="five one three">
            <div class="with_border_left div_once text_with_over">
              <span>3. أخرى</span>
            </div>
            <div class="main_par_num_text">
              <span>___</span>
            </div>
          </div>
        </div>
        <div class="num_three">
          <div class="one">
            <span class="name bg_main_color">إسم المالك</span>

            <span v-if="ownersData">{{
              handlerOfNullProperty(ownersData.name)
            }}</span>
          </div>
          <div class="two one">
            <span class="name bg_main_color">رقم الهوية الوطنية</span>
            <span v-if="ownersData">{{
              handlerOfNullProperty(ownersData.national_id)
            }}</span>
          </div>
          <div class="three one">
            <span class="name bg_main_color">اسم المشروع</span>
            <span v-if="submissionData">{{
              handlerOfNullProperty(submissionData.pro_name)
            }}</span>
          </div>
          <div class="four one">
            <span class="name bg_main_color">استعمال العقار</span>
            <span v-if="submissionData">{{
              handlerOfNullProperty(submissionData.submission_using)
            }}</span>
          </div>
          <div class="five one">
            <span class="name bg_main_color">تصنيف العقار</span>
            <span v-if="submissionData">{{
              handlerOfNullProperty(submissionData.building_type)
            }}</span>
          </div>
        </div>
      </section>
      <!-- End Section Part One  -->

      <!-- Start Section Part Two  -->
      <section class="main_part_two_wrapper">
        <!-- Start Section Part Two --- [ Part one ]  -->
        <section class="section_part_two">
          <!-- Start Wrapper A  -->
          <div class="our_part_wrapper">
            <!-- Start Part One Container -->
            <div class="part_one_container">
              <div class="main_container_title bg_main_color">
                <span>مساحة كامل العقار م2</span>
              </div>
              <div class="div_container_a">
                <div class="content_wrapper_a">
                  <div class="title bg_main_color">
                    <span>ارض</span>
                  </div>
                  <div class="wrapper_data">
                    <div class="one">
                      <span class="names bg_main_color">مبينة</span>

                      <span class="with_center_text w-100">
                        {{
                          handlerOfNullProperty(submissionData.submission_area)
                        }}</span
                      >
                    </div>
                    <div class="one two">
                      <span class="names bg_main_color">غير مبينة</span>

                      <span class="with_center_text w-100">
                        {{
                          handlerOfNullProperty(submissionData.unbuild_area)
                        }}</span
                      >
                    </div>
                    <div class="one two">
                      <span class="names bg_main_color">المجموع</span>

                      <span class="with_center_text w-100">{{
                        handlerOfNullProperty(submissionData.submission_area) +
                        handlerOfNullProperty(submissionData.unbuild_area)
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="div_container_b">
                <div class="content_wrapper_a">
                  <div class="title bg_main_color">
                    <span>بناء</span>
                  </div>
                  <div class="wrapper_data text-center">
                    <div class="one">
                      <span class="names bg_main_color">تحت الارضي</span>
                      <span  > {{ returnFloorsArea('تحت الارضي') }} </span>
                    </div>
                    <div class="one two">
                      <span class="names bg_main_color">الارضي</span>
                      <span>   {{ returnFloorsArea(' الارضي') }} </span>
                    </div>
                    <div class="one two">
                      <span class="names bg_main_color">اول</span>
                      <span>  {{ returnFloorsArea(' الاول') }} </span>
                    </div>
                    <div class="one two">
                      <span class="names bg_main_color">ثاني</span>
                      <span>  {{ returnFloorsArea(' الثاني') }} </span>
                    </div>
                    <div class="one two">
                      <span class="names bg_main_color">ثالث</span>
                      <span>  {{ returnFloorsArea(' الثالث') }} </span>
                    </div>
                    <div class="one two">
                      <span class="names bg_main_color">رابع</span>
                      <span>  {{ returnFloorsArea(' الرابع') }} </span>
                    </div>
                    <div class="one two">
                      <span class="names bg_main_color">خامس</span>
                      <span>  {{ returnFloorsArea(' الخامس') }} </span>
                    </div>
                    <div class="one two">
                      <span class="names bg_main_color">المجموع</span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Part One Container -->

            <!-- Start Part Two Container -->
            <div class="part_two_container">
              <div class="div_container_a">
                <div
                  class="a_one d-flex justify-content-center align-items-center bg_main_color"
                >
                  <span>المساحات المنزوعه</span>
                </div>
                <div class="a_two with_border_bottom">
                  <div class="line_one with_center_text">
                    <span>{{submissionData.removed_from_building + submissionData.removed_from_unbuilding}}</span>
                  </div>
                </div>
                <div class="a_two more_one with_border_bottom">
                  <div class="line_one with_center_text">
                    <span>{{ submissionData.notes }}</span>
                  </div>
                </div>
              </div>
              <div class="div_container_a div_container_b">
                <div
                  class="a_one d-flex justify-content-center align-items-center bg_main_color"
                >
                  <span>ملاحظات</span>
                </div>
                <div class="a_two"></div>
              </div>
            </div>
            <!-- End Part Two Container -->
          </div>
          <!-- End Wrapper A  -->

          <!-- Start Wrapper B  -->
          <div class="our_part_wrapper_b">
            <div class="part_b_one with_border_left">
              <div class="title with_border_bottom bg_main_colors">
                <span>الحدود والأطوال بموجب وثيقة الملكية</span>
              </div>
              <div class="for_content">
                <div class="title_parts with_border_bottom bg_main_color">
                  <span class="one with_border_left with_center_text"
                    >الإتجاه</span
                  >
                  <span class="one two with_border_left with_center_text"
                    >الحدود</span
                  >
                  <span class="one three with_center_text">الطول (م)</span>
                </div>
                <!-- Start Directions  -->
                <div class="title_parts with_border_bottom">
                  <span
                    class="one with_border_left with_center_text bg_main_color"
                    >شمالاً</span
                  >
                  <span
                    class="one two with_border_left with_center_text"
                    v-if="submissionData.contract_border_details"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.north_dir
                      )
                    }}</span
                  >
                  <span
                    class="one three with_center_text"
                    v-if="submissionData.contract_border_details"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.north_length
                      )
                    }}</span
                  >
                </div>
                <div class="title_parts with_border_bottom">
                  <span
                    class="one with_border_left with_center_text bg_main_color"
                    >جنوباً</span
                  >
                  <span
                    class="one two with_border_left with_center_text"
                    v-if="submissionData.contract_border_details"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.south_dir
                      )
                    }}</span
                  >
                  <span
                    class="one three with_center_text"
                    v-if="submissionData.contract_border_details"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.south_length
                      )
                    }}</span
                  >
                </div>
                <div class="title_parts with_border_bottom">
                  <span
                    class="one with_border_left with_center_text bg_main_color"
                    >شرقاً</span
                  >
                  <span
                    class="one two with_border_left with_center_text"
                    v-if="submissionData.contract_border_details"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.east_dir
                      )
                    }}</span
                  >
                  <span
                    class="one three with_center_text"
                    v-if="submissionData.contract_border_details"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.east_length
                      )
                    }}</span
                  >
                </div>
                <div class="title_parts with_border_bottom">
                  <span
                    class="one with_border_left with_center_text bg_main_color"
                    >غرباً</span
                  >
                  <span
                    class="one two with_border_left with_center_text"
                    v-if="submissionData.contract_border_details"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.west_dir
                      )
                    }}</span
                  >
                  <span
                    class="one three with_center_text"
                    v-if="submissionData.contract_border_details"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.west_length
                      )
                    }}</span
                  >
                </div>
                <div class="title_parts with_border_bottom">
                  <span
                    class="one with_border_left with_center_text bg_main_color"
                    >المساحة م2</span
                  >
                  <span
                    class="one two with_border_left with_center_text"
                  ></span>
                  <span class="one three with_center_text"></span>
                </div>
                <!-- End Directions  -->
              </div>
            </div>
            <div class="part_b_one">
              <div class="title with_border_bottom bg_main_colors">
                <span>الحدود والأطوال بموجب أعمال الحصر الميداني</span>
              </div>
              <div class="for_content">
                <div class="title_parts with_border_bottom bg_main_color">
                  <span class="one with_border_left with_center_text"
                    >الإتجاه</span
                  >
                  <span class="one two with_border_left with_center_text"
                    >الحدود</span
                  >
                  <span class="one three with_center_text">الطول (م)</span>
                </div>
                <!-- Start Directions  -->
                <div class="title_parts with_border_bottom">
                  <span
                    class="one with_border_left with_center_text bg_main_color"
                    >شمالاً</span
                  >
                  <span
                    class="one two with_border_left with_center_text"
                    v-if="submissionData.restrict_border"
                    >{{
                      handlerOfNullProperty(
                        submissionData.restrict_border.north_dir
                      )
                    }}</span
                  >
                  <span
                    class="one three with_center_text"
                    v-if="submissionData.restrict_border"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.north_length
                      )
                    }}</span
                  >
                </div>
                <div class="title_parts with_border_bottom">
                  <span
                    class="one with_border_left with_center_text bg_main_color"
                    >جنوباً</span
                  >
                  <span
                    class="one two with_border_left with_center_text"
                    v-if="submissionData.restrict_border"
                    >{{
                      handlerOfNullProperty(
                        submissionData.restrict_border.south_dir
                      )
                    }}</span
                  >
                  <span
                    class="one three with_center_text"
                    v-if="submissionData.restrict_border"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.south_length
                      )
                    }}</span
                  >
                </div>
                <div class="title_parts with_border_bottom">
                  <span
                    class="one with_border_left with_center_text bg_main_color"
                    >شرقاً</span
                  >
                  <span
                    class="one two with_border_left with_center_text"
                    v-if="submissionData.restrict_border"
                    >{{
                      handlerOfNullProperty(
                        submissionData.restrict_border.east_dir
                      )
                    }}</span
                  >
                  <span
                    class="one three with_center_text"
                    v-if="submissionData.restrict_border"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.east_length
                      )
                    }}</span
                  >
                </div>
                <div class="title_parts with_border_bottom">
                  <span
                    class="one with_border_left with_center_text bg_main_color"
                    >غرباً</span
                  >
                  <span
                    class="one two with_border_left with_center_text"
                    v-if="submissionData.restrict_border"
                    >{{
                      handlerOfNullProperty(
                        submissionData.restrict_border.west_dir
                      )
                    }}</span
                  >
                  <span
                    class="one three with_center_text"
                    v-if="submissionData.restrict_border"
                    >{{
                      handlerOfNullProperty(
                        submissionData.contract_border_details.west_length
                      )
                    }}</span
                  >
                </div>
                <div class="title_parts with_border_bottom">
                  <span
                    class="one with_border_left with_center_text bg_main_color"
                    >المساحة م2</span
                  >
                  <span
                    class="one two with_border_left with_center_text"
                  ></span>
                  <span class="one three with_center_text"></span>
                </div>
                <!-- Endv Directions  -->
              </div>
            </div>
          </div>
          <!-- End Wrapper B  -->

          <!-- Start Wrapper E  -->
          <div class="our_part_wrapper_e with_border_left with_border_bottom">
            <div class="p_one part with_border_left d-flex">
              <span
                class="name_s with_center_text with_border_left bg_main_color"
                >رقم الصك
              </span>
              <span>{{
                handlerOfNullProperty(submissionData.contract_number)
              }}</span>
            </div>
            <div class="p_one with_date with_border_left d-flex">
              <span
                class="name_s name_ss with_center_text with_border_left bg_main_color"
                >تاريخ الصك
              </span>
              <span
                ><span>{{submissionData.contract_date
                  
                }}</span></span
              >
            </div>
            <div class="p_one last d-flex">
              <span
                class="name_s name_ss2 with_center_text with_border_left bg_main_color"
                >مصدر الصك
              </span>
              <span
                ><span>{{
                  handlerOfNullProperty(submissionData.contract_source)
                }}</span></span
              >
            </div>
          </div>
          <!-- End Wrapper E -->

          <!-- Start Wrapper G -->
          <div class="our_part_wrapper_g with_border_left with_border_bottom">
            <div class="part_g_a with_border_left">
              <div
                class="title bg_main_colors with_center_text with_border_bottom"
              >
                <span>تم الرفع مساحياً من واقع الطبيعه</span>
              </div>
              <div class="gg_names_wrapper with_border_bottom">
                <span
                  class="name bg_main_color with_center_text with_border_left"
                  >الإسم</span
                >
                <span></span>
              </div>
              <div class="gg_names_wrapper with_border_bottom">
                <span
                  class="name bg_main_color with_center_text with_border_left"
                  >التوقيع</span
                >
                <span></span>
              </div>
              <div class="gg_names_wrapper">
                <span
                  class="name bg_main_color with_center_text with_border_left"
                  >التاريخ</span
                >
                <span></span>
              </div>
            </div>

            <div class="part_g_a part_g_b with_border_left">
              <div
                class="title bg_main_colors with_center_text with_border_bottom"
              >
                <span> تم تدقيق ومراجعة المساحات</span>
              </div>
              <div class="gg_names_wrapper with_border_bottom">
                <span
                  class="name bg_main_color with_center_text with_border_left"
                  >إسم المساح
                </span>
                <span></span>
              </div>
              <div class="gg_names_wrapper with_border_bottom">
                <span
                  class="name bg_main_color with_center_text with_border_left"
                  >التوقيع</span
                >
                <span></span>
              </div>
              <div class="gg_names_wrapper">
                <span
                  class="name bg_main_color with_center_text with_border_left"
                  >التاريخ</span
                >
                <span></span>
              </div>
            </div>
            <div class="part_g_a part_g_bc">
              <div class="title spa_title bg_main_colors with_border_bottom">
                <span class="one">يعتمد</span>
                <span class="two">صاحب الصلاحية ..</span>
                <span class="three">الختم</span>
              </div>
              <div class="gg_names_wrapper with_border_bottom">
                <span
                  class="name bg_main_color with_center_text with_border_left"
                  >الإسم</span
                >
                <span></span>
              </div>
              <div class="gg_names_wrapper with_border_bottom">
                <span
                  class="name bg_main_color with_center_text with_border_left"
                  >التوقيع</span
                >
                <span></span>
              </div>
              <div class="gg_names_wrapper">
                <span
                  class="name bg_main_color with_center_text with_border_left"
                  >التاريخ</span
                >
                <span></span>
              </div>
            </div>
          </div>
          <!-- End Wrapper G -->
          <!-- Start Wrapper C  -->
          <div class="our_part_wrapper_c with_border_left with_border_bottom">
            <div
              class="title with_center_text with_border_bottom bg_main_colors"
            >
              <span>بيانات الأرض والمشتملات المنزوعه</span>
            </div>
            <div class="main_content">
              <!-- Wrapper C Part One  -->
              <div class="content_one with_border_left">
                <div class="title_parts with_border_bottom bg_main_color">
                  <span class="one with_border_left with_center_text"
                    >النوع</span
                  >
                  <span class="one two with_border_left with_center_text">
                    المنزوع من العقار
                  </span>
                  <span class="one three with_center_text">الوحده</span>
                </div>
                <!-- Start Directions  -->
                <div
                  class="title_parts with_border_bottom"
                  v-for="(item, i) in submissionData.includes_data" v-if=" i < 8"
                  :key="i"
                >
                  <span class="one with_border_left with_center_text includes_types">{{
                    item.type
                  }}</span>
                  <span class="one two with_border_left with_center_text">{{
                    item.qty
                  }}</span>
                  <span class="one three with_center_text">{{item.unit}}</span>
                </div>

                <!-- End Directions  -->
              </div>
              <!-- Wrapper C Part Two  -->
              <div class="content_two">
                <div
                  class="titles with_center_text with_border_bottom bg_main_color"
                >
                  <div class="one_a with_center_text with_border_left">
                    <span>الوصف</span>
                  </div>
                  <div class="one_a with_center_text">
                    <span>القيمه "ريال سعودي"</span>
                  </div>
                </div>
                <div class="content_parts with_border_bottom">
                  <span class="one with_border_left with_center_text"
                    >إجمالي التعويض</span
                  >
                  <span class="one three with_center_text">{{ totalComp() }}</span>
                </div>
                <div class="content_parts with_border_bottom">
                  <span class="one with_border_left with_center_text"
                    >إجمالي التعويض بدون أرض</span
                  >
                  <span class="one three with_center_text"></span>
                </div>
                <div class="content_parts with_border_bottom">
                  <span class="one with_border_left with_center_text"
                    >إعادة تحسين المستوى المعيشي</span
                  >
                  <span class="one three with_center_text"></span>
                </div>
                <div class="content_parts">
                  <span class="one with_border_left with_center_text"
                    >بدل انتقال</span
                  >
                  <span class="one three with_center_text"></span>
                </div>
              </div>
            </div>
          </div>
          <!-- End Wrapper C  -->

          <!-- Start Wrapper D  -->
          <div class="our_part_wrapper_d with_border_left with_center_text">
            <div class="part_d_one with_border_left">
              <div class="content_cont_c with_border_bottom">
                <span
                  class="name with_border_left with_center_text bg_main_color"
                  >الوظيفه</span
                >
                <span></span>
              </div>
              <div class="content_cont_c with_border_bottom">
                <span
                  class="name with_border_left with_center_text bg_main_color"
                  >الإسم</span
                >
                <span></span>
              </div>
              <div class="content_cont_c with_border_bottom">
                <span
                  class="name with_border_left with_center_text bg_main_color"
                  >التوقيع</span
                >
                <span></span>
              </div>
              <div class="content_cont_c">
                <span
                  class="name with_border_left with_center_text bg_main_color"
                  >التاريخ</span
                >
                <span class="with_center_text flex-grow-1"> / / 14هـ</span>
              </div>
            </div>
            <div class="part_d_one">
              <div class="content_cont_c with_border_bottom">
                <span
                  class="name with_border_left with_center_text bg_main_color"
                  >الوظيفه</span
                >
                <span></span>
              </div>
              <div class="content_cont_c with_border_bottom">
                <span
                  class="name with_border_left with_center_text bg_main_color"
                  >الإسم</span
                >
                <span></span>
              </div>
              <div class="content_cont_c with_border_bottom">
                <span
                  class="name with_border_left with_center_text bg_main_color"
                  >التوقيع</span
                >
                <span></span>
              </div>
              <div class="content_cont_c">
                <span
                  class="name with_border_left with_center_text bg_main_color"
                  >التاريخ</span
                >
                <span class="with_center_text flex-grow-1"> / / 14هـ</span>
              </div>
            </div>
          </div>
          <!-- End Wrapper D -->
        </section>
        <!-- End Section Part Two ---  [ Part one ] -->
        <!-- Start Section Part Two ---  [ Part Two ] -->
        <section class="section_part_two_wrapper_two">
          <div class="main_part_two_section">
            <div
              class="section_title with_center_text with_border_bottom bg_main_colors"
            >
              <span>موقع العقار</span>
            </div>
            <div class="wrapper_numbers">
              <div class="aside_one with_border_left">
                <div class="one_a with_border_bottom">
                  <span class="a_a with_border_left bg_main_color"
                    >رمز الشركة</span
                  >
                  <span class="a_a_b with_border_left bg_main_color"
                    >رمز المشروع</span
                  >
                  <span class="a_a bg_main_color">المنطقة</span>
                </div>
                <div class="all_inputs with_border_bottom">
                  <div class="inputs_one with_border_left">
                    <span class="input_number">009</span>
                    <!-- <span class="input_number with_border_left">24</span>
                    <span class="input_number">25</span> -->
                  </div>
                  <div class="inputs_one a_b with_border_left">
                    <span class="input_number just_two_inputs">{{ submissionData.pro_num }}</span>
                  </div>
                  <div class="inputs_one">
                    <span class="input_number just_two_inputs">{{
                      handlerOfNullProperty(submissionData.zone)
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="aside_one aside_two">
                <div class="one_a with_border_bottom">
                  <span class="a_a with_border_left bg_main_color">اللوحة</span>
                  <span class="a_a_b bg_main_color">رقم العقار</span>
                </div>
                <div class="all_inputs with_border_bottom">
                  <div class="inputs_one with_border_left">
                    <span class="input_number">
                      {{ handlerOfNullProperty(submissionData.plad_num) }}</span
                    >
                  </div>
                  <div class="inputs_one second_two with_border_left">
                    <span class="input_number">{{
                      handlerOfNullProperty(submissionData.pro_num)
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="map_container with_border_bottom">
              <div class="with_center_text h-100" v-if="submissionData.map">
                <img
                  class="d-block w-100 h-100"
                  :src="submissionData.map"
                  alt="map"
                />
              </div>
            </div>
            <div class="contains_wrapper">
              <div class="tittles_wrap with_border_bottom">
                <div
                  class="title_one num with_center_text with_border_left bg_main_color"
                >
                  <span>الرقم</span>
                </div>
                <div
                  class="title_one num_two with_center_text with_border_left bg_main_color"
                >
                  <span>شماليات</span>
                </div>
                <div class="title_one num_two with_center_text bg_main_color">
                  <span>شرقيات</span>
                </div>
              </div>
            </div>

            <div
              class="contains_wrapper"
              v-for="(item, i) in submissionData.coordinates" v-if="i < 7"
              :key="i"
            >
              <div class="tittles_wrap with_border_bottom">
                <div
                  class="title_one num with_center_text with_border_left bg_main_color"
                >
                  <span>{{ i + 1 }}</span>
                </div>
                <div
                  class="title_one num_two with_center_text with_border_left"
                >
                  <span>{{ item.coor_north }}</span>
                </div>
                <div class="title_one num_two with_center_text">
                  <span>{{ item.coor_east }}</span>
                </div>
              </div>
            </div>
            
          </div>
          
        </section>
        <!-- End Section Part Two ---  [ Part Two ] -->
      </section>
      <!-- End Section Part Two  -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["submissionData", "ownersData"],
  data() {
    return {
      allDetails: {},
    };
  },

  methods: {
    totalComp(){
      let data = this.submissionData.includes_data;
      let total = 0 ;
      data.forEach((element,index) => {
          
              total = total + (element.qty * element.price);
          
          
      });
      
      return Number(total).toLocaleString() ;

      // return total;
    },
    returnFloorsArea(theFloor){
      let x = [];
      this.submissionData.includes.forEach(element => {
        if (element.build_id == 1) {
          x.push(element)
        }
      });
      if(x.length >0){
        let floorItem = x[0].floors;
        let floorArea = 0;
        floorItem.forEach(element => {
          if (element.floor == theFloor ) {
            floorArea = element.area
          }
        });
        return floorArea;

      }else{
        return '-';
      }
      
      
    },
    printInvoice() {
      window.print();
    },
    handlerOfNullProperty(anyProperty) {
      if (anyProperty != null) {
        return anyProperty;
      } else {
        return "____";
      }
    },
  },
};
</script>

<style lang="scss" scoped>

// @media print {
//   * {
//     -webkit-print-color-adjust: exact !important; /* Chrome, Safari, Edge */
//     color-adjust: exact !important; /*Firefox*/
//   }
// }
$border-color: #ccc;
$column-height: 26px;
$min-part-height: 130px;
$min-name-width: 120px;
.bg_main_color {
  background-color: #dcecf2;
}
.bg_main_colors {
  background-color: #f2f2f2;
}
.with_border_left {
  border-left: 1px solid $border-color;
}
.with_border_bottom {
  border-bottom: 1px solid $border-color;
}
.with_center_text {
  display: flex;
  justify-content: center;
  align-items: center;
}
.our_wrapper_for_container_details{
  overflow-x: scroll;

}
.main_pdf_details_wrapper {
  background-color: #fff;
  width: 1300px;
  border: 1px solid $border-color;
  // Start Section Part One
  .section_part_one {
    border-bottom: 1px solid $border-color;
    display: flex;
    // direction: rtl;
    text-align: right;
    .num_one {
      width: 30%;
      min-height: $min-part-height;
      display: flex;
      justify-content: center;
    }
    .num_two {
      min-height: $min-part-height;
      width: 45%;
      border-right: 1px solid $border-color;
      border-left: 1px solid $border-color;
      .wrap_a {
        border-bottom: 1px solid $border-color;
        height: $column-height;
      }

      .one {
        height: $min-part-height / 5;
      }
      .two {
        border-top: 1px solid $border-color;
      }
      .three {
        border-top: 1px solid $border-color;
        display: flex;
        gap: 8px;
        .text_with_over {
          display: flex;
          justify-content: center;
          align-items: center;
          width: $min-name-width;
        }
        .main_par_num_text {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-grow: 1;
        }
      }
      .four {
        border-top: 1px solid $border-color;
      }
      .five {
        border-top: 1px solid $border-color;
      }
    }
    .num_three {
      width: 25%;
      min-height: $min-part-height;
      .one {
        height: $min-part-height / 5;
        display: flex;
        gap: 8px;
        .name {
          min-width: $min-name-width;
          border-left: 1px solid $border-color;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .two {
        border-top: 1px solid $border-color;
      }
      .three {
        border-top: 1px solid $border-color;
      }
      .four {
        border-top: 1px solid $border-color;
      }
      .five {
        border-top: 1px solid $border-color;
      }
    }
  }
  // End Section Part One

  // Start Section Part Two
  .main_part_two_wrapper {
    display: flex;
    // direction: rtl;
    .section_part_two {
      width: 60%;
      // Start Wrapper A
      .our_part_wrapper {
        display: flex;
        // direction: rtl;
        text-align: right;
        // Start Part One Style
        .part_one_container {
          width: 50%;
          border-left: 1px solid $border-color;
          display: flex;
          // direction: rtl;
          text-align: right;
          flex-wrap: wrap;
          .main_container_title {
            width: 100%;
            border-bottom: 1px solid $border-color;
            display: flex;
            justify-content: center;
            align-items: center;
            height: $column-height;
          }
          .div_container_a {
            width: 50%;
            border-left: 1px solid $border-color;
            .content_wrapper_a {
              .title {
                border-bottom: 1px solid $border-color;
                height: $column-height;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .wrapper_data {
                .one {
                  display: flex;
                  gap: 8px;
                  .names {
                    height: $column-height * 2;
                    min-width: $min-name-width;
                    border-left: 1px solid $border-color;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  &.two {
                    border-top: 1px solid $border-color;
                    .names {
                      height: $column-height * 3;
                    }
                  }
                }
              }
            }
          }
          .div_container_b {
            width: 50%;
            .content_wrapper_a {
              .title {
                border-bottom: 1px solid $border-color;
                height: $column-height;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .wrapper_data {
                .one {
                  display: flex;
                  gap: 8px;
                  height: $column-height;
                  &.two {
                    border-top: 1px solid $border-color;
                  }
                  .names {
                    min-width: $min-name-width;
                    border-left: 1px solid $border-color;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                }
              }
            }
          }
        }
        // End Part One Style

        // Start Part two Style
        .part_two_container {
          width: 50%;
          display: flex;
          // direction: rtl;
          text-align: right;
          .div_container_a {
            width: 50%;
            border-left: 1px solid $border-color;
            .a_one {
              border-bottom: 1px solid $border-color;
              height: $column-height;
            }
          }
          .div_container_b {
            width: 50%;
          }
        }
        // End Part two Style
      }
      // End Wrapper A
      // Start Wrapper B
      .our_part_wrapper_b {
        border-top: 1px solid $border-color;
        border-left: 1px solid $border-color;
        // direction: rtl;
        text-align: right;
        display: flex;
        .part_b_one {
          width: 50%;
          .title {
            display: flex;
            justify-content: center;
            align-items: center;
            height: $column-height;
          }
          .for_content {
            .title_parts {
              display: flex;
              height: $column-height;
              .one {
                width: $min-name-width;
              }
              .two {
                width: $min-name-width * 2 + 30px;
              }
              .three {
                width: $min-name-width - 30px;
              }
            }
          }
        }
      }
      // End Wrapper B

      // Start Wrapper E
      .our_part_wrapper_e {
        // direction: rtl;
        text-align: right;
        display: flex;
        height: $column-height;
        .p_one {
          .name_s {
            width: $min-name-width;
            &.name_ss,
            &.name_ss2 {
              width: 100px;
            }
          }
          &.part {
            gap: 8px;
            width: calc(50% - 100px);
          }

          &.with_date {
            gap: 8px;
            width: 35%;
          }
          &.last {
            gap: 8px;
            width: calc(100% - (85% - 100px));
          }
        }
      }

      // Start Wrapper G
      .our_part_wrapper_g {
        // direction: rtl;
        text-align: right;
        display: flex;

        .part_g_a {
          width: 35%;
          .title {
            height: $column-height;
            &.spa_title {
              display: flex;
              .one {
                width: 15%;
              }
              .two {
                width: 75%;
              }
              .three {
                width: 10%;
              }
            }
          }
          &.part_g_b {
            width: 30%;
          }
        }
        .gg_names_wrapper {
          height: $column-height;
          display: flex;
          gap: 8px;
          .name {
            width: $min-name-width;
          }
        }
      }
      // End Wrapper G

      // Start Wrapper C
      .our_part_wrapper_c {
        .title {
          height: $column-height;
        }
        .main_content {
          display: flex;
          .content_one {
            width: 50%;
            .title_parts {
              display: flex;
              height: $column-height;
              .one {
                width: $min-name-width;
              }
              .two {
                width: $min-name-width * 2 + 30px;
              }
              .three {
                width: $min-name-width - 30px;
              }
            }
          }
          .content_two {
            width: 50%;
            .titles {
              .one_a {
                width: 50%;
                height: $column-height;
              }
            }
            .content_parts {
              display: flex;
              .one {
                width: 50%;
                height: $column-height * 2;
              }
            }
          }
        }
      }
      // End Wrapper C
      .our_part_wrapper_d {
        // direction: rtl;
        text-align: right;
        .part_d_one {
          width: 50%;
          .content_cont_c {
            display: flex;
            height: $column-height * 2;
            .name {
              width: $min-name-width;
            }
          }
        }
      }
    }
    .section_part_two_wrapper_two {
      width: 40%;
      .main_part_two_section {
        .section_title {
          height: $column-height;
        }
        .wrapper_numbers {
          display: flex;
          // direction: rtl;
          text-align: center;
          .aside_one {
            width: 50%;
            .one_a {
              display: flex;
              .a_a {
                width: 30%;
                display: block;
              }
              .a_a_b {
                width: 40%;
              }
            }
            .all_inputs {
              display: flex;

              .inputs_one {
                width: 30%;
                .input_number {
                  width: calc(100% / 3);
                  display: inline-block;
                  height: $column-height * 1.2;
                  line-height: 2;
                  &.just_two_inputs {
                    width: calc(100% / 2);
                  }
                }
                &.a_b {
                  width: 40%;
                }
              }
            }
            &.aside_two {
              .one_a {
                display: flex;
                .a_a_b {
                  width: 70%;
                }
              }
              .all_inputs {
                .inputs_one {
                  &.second_two {
                    width: 70%;
                    .input_number {
                      width: calc(100% / 5);
                    }
                  }
                }
              }
            }
          }
        }
        .map_container {
          height: 760px;
        }
        .contains_wrapper {
          .tittles_wrap {
            display: flex;
            .title_one {
              height: $column-height;
              &.num {
                width: 20%;
              }
              &.num_two {
                width: 40%;
              }
            }
          }
        }
      }
    }
  }

  // End Section Part Two
}

@media print {
  * {
    -webkit-print-color-adjust: exact !important; /* Chrome, Safari, Edge */
    color-adjust: exact !important; /*Firefox*/
    @page { size: landscape; }
  }
  .our_wrapper_for_container_details {
    transform: rotate(90deg);
    .includes_types{
      font-size: x-small;
    }
    .btn_print{
      display: none;
    }
    overflow:hidden !important;
    height: 60% !important;
    width: 180% !important;
    position: relative;
    inset: 0;
    padding-top: 25%;
    margin-right: -46.5%;
    // margin: 0;
    z-index: 999999999999999999999999999999;
    zoom: 109%;
    // zoom:(5,1.4)
    // transform: scale(2);
  }
}
</style>
