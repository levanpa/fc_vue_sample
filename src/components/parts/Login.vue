<template lang="pug">
.login-component
  .wrapper.login-wrapper
    .content-wrapper
      form.common-form
        .form-top
          h1.form-title Login
          p.form-description Login width your data that you entered during your resgistration.
        .form-row
          span.form-text Your email
          input.form-input(ref="input-email", type="text", placeholder="example@gmail.com")
        .form-row
          span.form-text Password
          input.form-input(ref="input-password", type="password")
        .form-row
          input#checkbox-remember.form-checkbox(ref="checkbox-remember", type="checkbox")
          label.form-label(for="checkbox-remember") Keep me logged in.
        .form-row
          button.common-button.form-button.trans Login
          .login-social
            span.social-text Or login with
            ul.social-list
              each item in Array(3)
                li.social-item
                  a.social-link.trans(href="#")
                    img.social-image(src=``, width="40", height="40", alt="missing")
          .form-links
            router-link.form-link.trans(to="/") Sign up
            router-link.form-link.trans(to="/") Forgot password?
    img.login-image(src=``, width="650", height="800", alt="missing")
    //- img(src=`${imgPath}`, width="650", height="800", alt="missing")
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "../../sass/parts/login.sass"
@import "../../sass/parts/form.sass"
</style>