<template>
    <div class="welcome">
        <div class="text-container">
            <h1 class="t1">Welcome to</h1>
            <h1 class="t2">Shadow Garden</h1>  
        </div>
    </div>
</template>

<style scoped>
.welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    transform: translateY(-20%);
}

.text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: slideUp 2s ease-out, slideLeft 1s ease-out 1.5s forwards;
}

h1 {
    font-size: 5rem;
    margin: 0.5rem;
    opacity: 0.8;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(200px);
    }
    to {
        opacity: 1;
        transform: translateY(-10px);
    }
}

@keyframes slideLeft {
    from {
        transform: translateX(0);
        align-items: center;

    }
    to {
        transform: translateX(-35%) scale(1.5);
        align-items: flex-start;
        opacity: 0.35;
    }
}
</style>
