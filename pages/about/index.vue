<template>
  <section class="container">
    <div style="padding: 10px;background: #f8f8f9">
      <Card 
        :padding="0"
        title="Options" 
        icon="ios-options"
        shadow
        style="width: 300px;">
        <CellGroup>
          <Cell 
            title="With Badge" 
            to="/components/badge">
            <Badge
              slot="extra"
              :count="10"/>
          </Cell>
        </CellGroup>
      </Card>
    </div>
  </section>
</template>
<script>
export default {
  data: function() {
    return {
      name: 'niugm',
      switchValue: true
    }
  },

  methods: {
    changeName(name) {
      this.name = name
    }
  }
}
</script>
