<template>
    <button type="button" class="btn--hamburger--wrapper">
        <span class="btn--hamburger" />
    </button>
</template>


<style lang="scss">
    .btn--hamburger {
        height: 2px;
        width: 26px;
        position: relative;
        background-color: #000;
        
        &::after {
            content: '';
            position: absolute;
            height: 2px;
            width: 26px;
            top: 8px;
            left: 0;
            background-color: #000;
            transition: 0.3s;
        }

        &::before {
            content: '';
            position: absolute;
            height: 2px;
            width: 26px;
            top: -8px;
            left: 0;
            background-color: #000;
            transition: 0.3s;
        }

        &--wrapper {
            height: 32px;
            width: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color:rgba(0,0,0,0);
            border: 0;  
        }
    }

    .hamburger-posit {
        position: fixed;
        right: 20px;
        top: 20px;
        z-index: 10;
    }

    .icon-active {
        & .btn--hamburger {
            height: 0;

            &::after {
                top: 0;
                transform: rotateZ(45deg);
                transition: 0.3s;
            }

            &::before {
                top: 0;
                transform: rotateZ(-45deg);
                transition: 0.3s;
            }

    }

        & .hamburger-posit {
            position: fixed;
            right: 150px;
            top: 20px;
            z-index: 10;
        }
 
}


</style>