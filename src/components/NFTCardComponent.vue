<template>
  <div
    class="flex h-full min-h-screen w-screen items-center justify-center bg-neutral-dark-blue-bg px-6"
  >
    <div
      class="flex w-full max-w-nft-card flex-col items-center justify-center gap-y-6 rounded-card bg-neutral-dark-blue-card p-6 drop-shadow-xl"
    >
      <div class="relative rounded-image">
        <div
          class="absolute inset-x-0 z-10 flex size-full items-center justify-center rounded-image opacity-0 hover:cursor-pointer hover:bg-primary-cyan/50 hover:opacity-100"
        >
          <img class="size-12" src="/images/icon-view.svg" />
        </div>
        <img class="rounded-image" src="/images/image-equilibrium.jpg" />
      </div>
      <div class="flex w-full flex-col">
        <h1
          class="font-outfit text-xl font-semibold text-white hover:cursor-pointer hover:text-primary-cyan"
        >
          Equilibrium #3429
        </h1>
        <p class="mt-4 font-outfit font-light text-primary-soft-blue">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div
          class="flex w-full items-center justify-between border-b border-neutral-dark-blue-line pb-4 pt-6"
        >
          <div class="flex items-center gap-x-2">
            <img src="/images/icon-ethereum.svg" />
            <span class="font-outfit text-primary-cyan">0.041 ETH</span>
          </div>
          <div class="flex items-center gap-x-2">
            <img src="/images/icon-clock.svg" />
            <span class="font-outfit text-primary-soft-blue">3 days left</span>
          </div>
        </div>
        <div class="flex items-center gap-x-3 pt-4">
          <span class="size-8 rounded-full border border-white">
            <img src="/images/image-avatar.png" />
          </span>
          <span class="font-outfit text-primary-soft-blue">
            Creation of
            <span
              class="font-outfit text-white hover:cursor-pointer hover:text-primary-cyan"
              >Jules Wyvern</span
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
