<script setup lang="ts">
import { Input } from '../src/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import 'iconify-icon'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
</script>

<template>
  <nav class="w-full h-16 border-b bg-muted/40 flex justify-between items-center px-6">
    <form class="w-full max-w-96 relative h-fit">
      <iconify-icon
        class="absolute top-[50%] translate-y-[-50%] left-3"
        icon="lucide:search"
      ></iconify-icon>
      <Input class="max-w-96 w-full pl-8 bg-background" type="text" placeholder="Search..." />
    </form>

    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar
          ><AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
          <AvatarFallback>CN</AvatarFallback></Avatar
        >
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
