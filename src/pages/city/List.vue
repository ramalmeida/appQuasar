<template>
    <q-page padding>
        <city-list-table
        :cities="city"
        />
    </q-page>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, onBeforeMount } from 'vue'
import useCitiesService from 'src/hooks/useCitiesService'
import usecatchError from 'src/hooks/useCatchError'
export default defineComponent({
  name: 'CityList',
  components: {
    CityListTable: defineAsyncComponent(() => import('components/CitylistTable.vue'))
  },
  setup () {
    const { getallCities, cities } = useCitiesService()
    const { errorNotify } = usecatchError()
    onBeforeMount(async () => {
      try {
        await getAllCities()
      } catch (e) {
        errorNotify(e)
      }
    })
    return {
      cities
    }
  }
})
</script>
