import React from 'react'
import {Grid} from 'semantic-ui-react'

const PagePreview = () => {
    return (
        <div className="page-preview">
        <Grid>
          <Grid.Column width={10}>
            POdglad artykułu
          </Grid.Column>
          <Grid.Column width={6}>
            Lista wybranych artykułów
          </Grid.Column>
        </Grid>
      </div>
    )
}

export default PagePreview
