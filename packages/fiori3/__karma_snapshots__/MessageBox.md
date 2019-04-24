# `MessageBox`

#### `Confirm - OK`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageBox)) type="Confirm" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
      <WithStyles(MessageBox) type="Confirm" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
        <MessageBox type="Confirm" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
          <div className="MessageBox-overlay---" data-ui5-slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Confirm">
                <div className="MessageBox-icon---">
                  <Icon src="question-mark">
                    <WithWebComponent theme={{...}} src="question-mark">
                      <ui5-icon src="question-mark" class="sapUiSizeCompact" />
                    </WithWebComponent>
                  </Icon>
                </div>
                <Title level="H5">
                  <WithWebComponent theme={{...}} level="H5">
                    <ui5-title level="H5" class="sapUiSizeCompact">
                      Confirmation
                    </ui5-title>
                  </WithWebComponent>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Jss(WithStyles(Component)) renderWhitespace={false} wrapping={true} width={{...}}>
                  <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                    <Component renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                      <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                        Confirm - OK
                      </span>
                    </Component>
                  </WithStyles(Component)>
                </Jss(WithStyles(Component))>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Emphasized" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        OK
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
                <MessageBoxButton emphasize={false} onClick={[Function]} action="Cancel">
                  <Button style={{...}} onPress={[Function]} type="Transparent" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Transparent" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Transparent" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        Cancel
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </Jss(WithStyles(MessageBox))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Confirm - Cancel`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageBox)) type="Confirm" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
      <WithStyles(MessageBox) type="Confirm" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
        <MessageBox type="Confirm" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
          <div className="MessageBox-overlay---" data-ui5-slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Confirm">
                <div className="MessageBox-icon---">
                  <Icon src="question-mark">
                    <WithWebComponent theme={{...}} src="question-mark">
                      <ui5-icon src="question-mark" class="sapUiSizeCompact" />
                    </WithWebComponent>
                  </Icon>
                </div>
                <Title level="H5">
                  <WithWebComponent theme={{...}} level="H5">
                    <ui5-title level="H5" class="sapUiSizeCompact">
                      Confirmation
                    </ui5-title>
                  </WithWebComponent>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Jss(WithStyles(Component)) renderWhitespace={false} wrapping={true} width={{...}}>
                  <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                    <Component renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                      <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                        Confirm - Cancel
                      </span>
                    </Component>
                  </WithStyles(Component)>
                </Jss(WithStyles(Component))>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Emphasized" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        OK
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
                <MessageBoxButton emphasize={false} onClick={[Function]} action="Cancel">
                  <Button style={{...}} onPress={[Function]} type="Transparent" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Transparent" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Transparent" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        Cancel
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </Jss(WithStyles(MessageBox))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Success`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageBox)) type="Success" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
      <WithStyles(MessageBox) type="Success" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
        <MessageBox type="Success" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
          <div className="MessageBox-overlay---" data-ui5-slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Success">
                <div className="MessageBox-icon---">
                  <Icon src="message-success">
                    <WithWebComponent theme={{...}} src="message-success">
                      <ui5-icon src="message-success" class="sapUiSizeCompact" />
                    </WithWebComponent>
                  </Icon>
                </div>
                <Title level="H5">
                  <WithWebComponent theme={{...}} level="H5">
                    <ui5-title level="H5" class="sapUiSizeCompact">
                      Success
                    </ui5-title>
                  </WithWebComponent>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Jss(WithStyles(Component)) renderWhitespace={false} wrapping={true} width={{...}}>
                  <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                    <Component renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                      <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                        Success
                      </span>
                    </Component>
                  </WithStyles(Component)>
                </Jss(WithStyles(Component))>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Emphasized" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        OK
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </Jss(WithStyles(MessageBox))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Warning`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageBox)) type="Warning" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
      <WithStyles(MessageBox) type="Warning" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
        <MessageBox type="Warning" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
          <div className="MessageBox-overlay---" data-ui5-slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Warning">
                <div className="MessageBox-icon---">
                  <Icon src="message-warning">
                    <WithWebComponent theme={{...}} src="message-warning">
                      <ui5-icon src="message-warning" class="sapUiSizeCompact" />
                    </WithWebComponent>
                  </Icon>
                </div>
                <Title level="H5">
                  <WithWebComponent theme={{...}} level="H5">
                    <ui5-title level="H5" class="sapUiSizeCompact">
                      Warning
                    </ui5-title>
                  </WithWebComponent>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Jss(WithStyles(Component)) renderWhitespace={false} wrapping={true} width={{...}}>
                  <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                    <Component renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                      <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                        Warning
                      </span>
                    </Component>
                  </WithStyles(Component)>
                </Jss(WithStyles(Component))>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Emphasized" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        OK
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </Jss(WithStyles(MessageBox))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Error`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageBox)) type="Error" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
      <WithStyles(MessageBox) type="Error" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
        <MessageBox type="Error" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
          <div className="MessageBox-overlay---" data-ui5-slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Error">
                <div className="MessageBox-icon---">
                  <Icon src="message-error">
                    <WithWebComponent theme={{...}} src="message-error">
                      <ui5-icon src="message-error" class="sapUiSizeCompact" />
                    </WithWebComponent>
                  </Icon>
                </div>
                <Title level="H5">
                  <WithWebComponent theme={{...}} level="H5">
                    <ui5-title level="H5" class="sapUiSizeCompact">
                      Error
                    </ui5-title>
                  </WithWebComponent>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Jss(WithStyles(Component)) renderWhitespace={false} wrapping={true} width={{...}}>
                  <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                    <Component renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                      <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                        Error
                      </span>
                    </Component>
                  </WithStyles(Component)>
                </Jss(WithStyles(Component))>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="Close">
                  <Button style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Emphasized" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        Close
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </Jss(WithStyles(MessageBox))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Information`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageBox)) type="Information" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}}>
      <WithStyles(MessageBox) type="Information" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
        <MessageBox type="Information" visible={true} onClose={[Function]} title={{...}} icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
          <div className="MessageBox-overlay---" data-ui5-slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Information">
                <div className="MessageBox-icon---">
                  <Icon src="message-information">
                    <WithWebComponent theme={{...}} src="message-information">
                      <ui5-icon src="message-information" class="sapUiSizeCompact" />
                    </WithWebComponent>
                  </Icon>
                </div>
                <Title level="H5">
                  <WithWebComponent theme={{...}} level="H5">
                    <ui5-title level="H5" class="sapUiSizeCompact">
                      Information
                    </ui5-title>
                  </WithWebComponent>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Jss(WithStyles(Component)) renderWhitespace={false} wrapping={true} width={{...}}>
                  <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                    <Component renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                      <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                        Information
                      </span>
                    </Component>
                  </WithStyles(Component)>
                </Jss(WithStyles(Component))>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Emphasized" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        OK
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </Jss(WithStyles(MessageBox))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Show`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageBox)) visible={true} onClose={[Function]} title="Custom" actions={{...}} icon={{...}} type="Confirm">
      <WithStyles(MessageBox) visible={true} onClose={[Function]} title="Custom" actions={{...}} icon={{...}} type="Confirm" theme={{...}} classes={{...}}>
        <MessageBox visible={true} onClose={[Function]} title="Custom" actions={{...}} icon={{...}} type="Confirm" theme={{...}} classes={{...}}>
          <div className="MessageBox-overlay---" data-ui5-slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Confirm">
                <div className="MessageBox-icon---">
                  <Icon src="question-mark">
                    <WithWebComponent theme={{...}} src="question-mark">
                      <ui5-icon src="question-mark" class="sapUiSizeCompact" />
                    </WithWebComponent>
                  </Icon>
                </div>
                <Title level="H5">
                  <WithWebComponent theme={{...}} level="H5">
                    <ui5-title level="H5" class="sapUiSizeCompact">
                      Custom
                    </ui5-title>
                  </WithWebComponent>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Jss(WithStyles(Component)) renderWhitespace={false} wrapping={true} width={{...}}>
                  <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                    <Component renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                      <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                        Custom
                      </span>
                    </Component>
                  </WithStyles(Component)>
                </Jss(WithStyles(Component))>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="Yes">
                  <Button style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Emphasized" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        Yes
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
                <MessageBoxButton emphasize={false} onClick={[Function]} action="No">
                  <Button style={{...}} onPress={[Function]} type="Transparent" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Transparent" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Transparent" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        No
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </Jss(WithStyles(MessageBox))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Success w/ custom title`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageBox)) type="Success" visible={true} onClose={[Function]} title="Custom Success" icon={{...}} actions={{...}}>
      <WithStyles(MessageBox) type="Success" visible={true} onClose={[Function]} title="Custom Success" icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
        <MessageBox type="Success" visible={true} onClose={[Function]} title="Custom Success" icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
          <div className="MessageBox-overlay---" data-ui5-slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Success">
                <div className="MessageBox-icon---">
                  <Icon src="message-success">
                    <WithWebComponent theme={{...}} src="message-success">
                      <ui5-icon src="message-success" class="sapUiSizeCompact" />
                    </WithWebComponent>
                  </Icon>
                </div>
                <Title level="H5">
                  <WithWebComponent theme={{...}} level="H5">
                    <ui5-title level="H5" class="sapUiSizeCompact">
                      Custom Success
                    </ui5-title>
                  </WithWebComponent>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Jss(WithStyles(Component)) renderWhitespace={false} wrapping={true} width={{...}}>
                  <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                    <Component renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                      <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                        Custom Success
                      </span>
                    </Component>
                  </WithStyles(Component)>
                </Jss(WithStyles(Component))>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Emphasized" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        OK
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </Jss(WithStyles(MessageBox))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Not visible`

```
"<ThemeProvider theme=\"sap_fiori3_light\" contentDensity=\"Compact\" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageBox)) type=\"Success\" visible={false} onClose={[Function]} title=\"Custom Success\" icon={{...}} actions={{...}}>
      <WithStyles(MessageBox) type=\"Success\" visible={false} onClose={[Function]} title=\"Custom Success\" icon={{...}} actions={{...}} theme={{...}} classes={{...}}>
        <MessageBox type=\"Success\" visible={false} onClose={[Function]} title=\"Custom Success\" icon={{...}} actions={{...}} theme={{...}} classes={{...}} />
      </WithStyles(MessageBox)>
    </Jss(WithStyles(MessageBox))>
  </ThemeProvider>
</ThemeProvider>"
```

#### `No Title`

```
<ThemeProvider theme="sap_fiori3_light" contentDensity="Compact" withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(MessageBox)) visible={true} onClose={[Function]} title={{...}} icon={{...}} type="Confirm" actions={{...}}>
      <WithStyles(MessageBox) visible={true} onClose={[Function]} title={{...}} icon={{...}} type="Confirm" actions={{...}} theme={{...}} classes={{...}}>
        <MessageBox visible={true} onClose={[Function]} title={{...}} icon={{...}} type="Confirm" actions={{...}} theme={{...}} classes={{...}}>
          <div className="MessageBox-overlay---" data-ui5-slot={[undefined]}>
            <div className="MessageBox-messageBox---" style={[undefined]} title={[undefined]}>
              <header className="MessageBox-header---" data-type="Confirm">
                <div className="MessageBox-icon---">
                  <Icon src="question-mark">
                    <WithWebComponent theme={{...}} src="question-mark">
                      <ui5-icon src="question-mark" class="sapUiSizeCompact" />
                    </WithWebComponent>
                  </Icon>
                </div>
                <Title level="H5">
                  <WithWebComponent theme={{...}} level="H5">
                    <ui5-title level="H5" class="sapUiSizeCompact">
                      Confirmation
                    </ui5-title>
                  </WithWebComponent>
                </Title>
              </header>
              <section className="MessageBox-content---">
                <Jss(WithStyles(Component)) renderWhitespace={false} wrapping={true} width={{...}}>
                  <WithStyles(Component) renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                    <Component renderWhitespace={false} wrapping={true} width={{...}} theme={{...}} classes={{...}}>
                      <span style={{...}} className="Component-text---" title={[undefined]} data-ui5-slot={[undefined]}>
                        No Title
                      </span>
                    </Component>
                  </WithStyles(Component)>
                </Jss(WithStyles(Component))>
              </section>
              <footer className="MessageBox-footer---">
                <MessageBoxButton emphasize={true} onClick={[Function]} action="OK">
                  <Button style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Emphasized" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Emphasized" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        OK
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
                <MessageBoxButton emphasize={false} onClick={[Function]} action="Cancel">
                  <Button style={{...}} onPress={[Function]} type="Transparent" icon={{...}} activeIcon={{...}}>
                    <WithWebComponent theme={{...}} style={{...}} onPress={[Function]} type="Transparent" icon={{...}} activeIcon={{...}}>
                      <ui5-button style={{...}} type="Transparent" icon={{...}} active-icon={{...}} class="sapUiSizeCompact">
                        Cancel
                      </ui5-button>
                    </WithWebComponent>
                  </Button>
                </MessageBoxButton>
              </footer>
            </div>
          </div>
        </MessageBox>
      </WithStyles(MessageBox)>
    </Jss(WithStyles(MessageBox))>
  </ThemeProvider>
</ThemeProvider>
```

