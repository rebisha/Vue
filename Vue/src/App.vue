<template>
<div class="container">
    <app-header></app-header>
    <hr>
    <app-servers></app-servers>
    <hr>
    <div class="col-lg-12">
        <headers></headers>

        <div class="row pt-3 pb-3">
            <div class="col-lg-6">
                <servers></servers>
            </div>

            <div class="col-lg-6">
                <app-serverDetail></app-serverDetail>
            </div>
        </div>

        <footers></footers>
    </div>
   
</div>
</template>

<script>

</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
 