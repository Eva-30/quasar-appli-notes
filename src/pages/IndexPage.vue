<script>
/* eslint-disable */
import ContainerComponent from 'src/components/ContainerComponent.vue'
import NoteCard from 'src/components/NoteCard.vue'
import { useLocalNotes } from 'src/helper'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { NoteCard, ContainerComponent },
  name: 'IndexPage',
  setup() {
    const notes = useLocalNotes()
    const router = useRouter()
    return { router, notes }
  }
})
</script>

<template>
  <q-page padding>
    <Container>
      <div class="row items-center justify-between">
        <h5 color="pink">Mes notes</h5>
        <div>
          <q-btn round color="positive" icon="add" to="/new"></q-btn>
        </div>
      </div>

      <NoteCard
        v-for="({ title, description }, idx) in notes"
        :key="idx"
        :title="title"
        :description="description"
        @click="router.push(`/note/${idx}`)"
      />
      <div v-if="notes.length === 0">Aucune note créée...</div>
    </Container>
  </q-page>
</template>
