<template>
    <GmapMap v-bind="{ ...mapProps }">
        <GmapInfoWindow
            :position="{ lat: 35, lng: -94 }"
            :opened="true"
            @mouseover="log('over')"
            @mouseout="log('out')"
            @onclick="log('click')"
        >
            Hover over me or click on me
        </GmapInfoWindow>
    </GmapMap>
</template>



<script>
export default {
    name: "App",
    data() {
        return {
            mapProps: {
                zoom: 4,
                center: { lat: 35, lng: -94 },
                style: "width: 100%; height:500px;",
                mapTypeId: "roadmap",
            },
        }
    },
    methods: {
      log(msg) {
        console.log(msg)
      }
    },
}
</script>
