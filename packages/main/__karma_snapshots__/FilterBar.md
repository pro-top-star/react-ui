# `FilterBar`

#### `Render without crashing`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(FilterBar)) renderSearch={[Function: renderSearch]} renderVariants={[Function: renderVariants]} displayOnly={true}>
      <WithStyles(FilterBar) renderSearch={[Function: renderSearch]} renderVariants={[Function: renderVariants]} displayOnly={true} theme={{...}} classes={{...}}>
        <FilterBar renderSearch={[Function: renderSearch]} renderVariants={[Function: renderVariants]} displayOnly={true} theme={{...}} classes={{...}}>
          <div className="FilterBar-outerContainer---">
            <div className="FilterBar-filterBarHeader---">
              <Jss(WithStyles(VariantManagement)) variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4">
                <WithStyles(VariantManagement) variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" theme={{...}} classes={{...}}>
                  <VariantManagement variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" theme={{...}} classes={{...}}>
                    <Popover open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" openBy={{...}} footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center">
                      <div style={{...}} onClick={[Function]}>
                        <div className="VariantManagement-VariantManagement---">
                          <span className="VariantManagement-VariantManagementText---">
                            <Title level="H4">
                              <WithWebComponent theme={{...}} level="H4">
                                <ui5-title level="H4" class="">
                                  Variant 1
                                </ui5-title>
                              </WithWebComponent>
                            </Title>
                          </span>
                          <Button design="Transparent" icon="navigation-down-arrow">
                            <WithWebComponent theme={{...}} design="Transparent" icon="navigation-down-arrow">
                              <ui5-button design="Transparent" icon="navigation-down-arrow" class="" />
                            </WithWebComponent>
                          </Button>
                        </div>
                      </div>
                      <WithTheme(WithWebComponent) open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center" innerComponentRef={[Function]}>
                        <WithWebComponent theme={{...}} open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center" innerComponentRef={[Function]}>
                          <ui5-popover open={false} header-text="Variants" placement-type="Bottom" tooltip={[undefined]} initial-focus={{...}} horizontal-align="Center" vertical-align="Center" inner-component-ref={[Function]} class="">
                            <Button className="VariantManagement-footer---" onPress={[Function]} design="Emphasized" data-ui5-slot="footer">
                              <WithWebComponent theme={{...}} className="VariantManagement-footer---" onPress={[Function]} design="Emphasized" data-ui5-slot="footer">
                                <ui5-button design="Emphasized" data-ui5-slot="footer" class="VariantManagement-footer---">
                                  Cancel
                                </ui5-button>
                              </WithWebComponent>
                            </Button>
                            <WithTheme(WithWebComponent) onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
                              <WithWebComponent theme={{...}} onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
                                <ui5-list mode="SingleSelect" header-text="" footer-text="" no-data-text="" separators="All" class="">
                                  <StandardListItem style={{...}} data-key="1" type="Active" selected={true} infoState="None">
                                    <WithWebComponent theme={{...}} style={{...}} data-key="1" type="Active" selected={true} infoState="None">
                                      <ui5-li selected={true} style={{...}} data-key="1" type="Active" info-state="None" class="">
                                        Variant 1
                                      </ui5-li>
                                    </WithWebComponent>
                                  </StandardListItem>
                                  <StandardListItem style={{...}} data-key="2" type="Active" selected={false} infoState="None">
                                    <WithWebComponent theme={{...}} style={{...}} data-key="2" type="Active" selected={false} infoState="None">
                                      <ui5-li style={{...}} data-key="2" type="Active" info-state="None" class="">
                                        Variant 2
                                      </ui5-li>
                                    </WithWebComponent>
                                  </StandardListItem>
                                </ui5-list>
                              </WithWebComponent>
                            </WithTheme(WithWebComponent)>
                          </ui5-popover>
                        </WithWebComponent>
                      </WithTheme(WithWebComponent)>
                    </Popover>
                  </VariantManagement>
                </WithStyles(VariantManagement)>
              </Jss(WithStyles(VariantManagement))>
              <div className="FilterBar-vLine---">
                 
                <Input placeholder="Search" type="Text" value="" valueState="None">
                  <WithWebComponent theme={{...}} placeholder="Search" type="Text" value="" valueState="None">
                    <ui5-input placeholder="Search" type="Text" value="" value-state="None" class="" />
                  </WithWebComponent>
                </Input>
                 
              </div>
              <div className="FilterBar-headerRowRight---">
                <Button onPress={[Function]} design="Transparent">
                  <WithWebComponent theme={{...}} onPress={[Function]} design="Transparent">
                    <ui5-button design="Transparent" class="">
                      Hide Filter Bar
                    </ui5-button>
                  </WithWebComponent>
                </Button>
              </div>
            </div>
            <div className="FilterBar-filterArea---">
              <Jss(WithStyles(FilterItem)) filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false}>
                <WithStyles(FilterItem) filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false} classes={{...}}>
                  <FilterItem filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false} classes={{...}}>
                    <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                      <Label for="">
                        <WithWebComponent theme={{...}} for="">
                          <ui5-label for="" class="">
                            Classification
                          </ui5-label>
                        </WithWebComponent>
                      </Label>
                      <Select onChange={[Function]} style={{...}} valueState="None">
                        <WithWebComponent theme={{...}} onChange={[Function]} style={{...}} valueState="None">
                          <ui5-select style={{...}} value-state="None" class="">
                            <StandardListItem type="Active" data-key="1" infoState="None">
                              <WithWebComponent theme={{...}} type="Active" data-key="1" infoState="None">
                                <ui5-li type="Active" data-key="1" info-state="None" class="">
                                  Text 1
                                </ui5-li>
                              </WithWebComponent>
                            </StandardListItem>
                            <StandardListItem type="Active" data-key="2" infoState="None">
                              <WithWebComponent theme={{...}} type="Active" data-key="2" infoState="None">
                                <ui5-li type="Active" data-key="2" info-state="None" class="">
                                  Text 2
                                </ui5-li>
                              </WithWebComponent>
                            </StandardListItem>
                          </ui5-select>
                        </WithWebComponent>
                      </Select>
                    </div>
                  </FilterItem>
                </WithStyles(FilterItem)>
              </Jss(WithStyles(FilterItem))>
              <Jss(WithStyles(FilterItem)) type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false}>
                <WithStyles(FilterItem) type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false} classes={{...}}>
                  <FilterItem type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false} classes={{...}}>
                    <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                      <Label for="">
                        <WithWebComponent theme={{...}} for="">
                          <ui5-label for="" class="">
                            Custom Filter 1
                          </ui5-label>
                        </WithWebComponent>
                      </Label>
                      <div>
                        <Switch onClick={[Function]} valueParameter="state" style={{...}}>
                          <WithWebComponent theme={{...}} onClick={[Function]} valueParameter="state" style={{...}}>
                            <ui5-switch on-click={[Function]} value-parameter="state" style={{...}} class="" />
                          </WithWebComponent>
                        </Switch>
                      </div>
                    </div>
                  </FilterItem>
                </WithStyles(FilterItem)>
              </Jss(WithStyles(FilterItem))>
            </div>
          </div>
        </FilterBar>
      </WithStyles(FilterBar)>
    </Jss(WithStyles(FilterBar))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Hide Filter Bar`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(FilterBar)) renderVariants={[Function: renderVariants]} displayOnly={true}>
      <WithStyles(FilterBar) renderVariants={[Function: renderVariants]} displayOnly={true} theme={{...}} classes={{...}}>
        <FilterBar renderVariants={[Function: renderVariants]} displayOnly={true} theme={{...}} classes={{...}}>
          <div className="FilterBar-outerContainer---">
            <div className="FilterBar-filterBarHeader---">
              <Jss(WithStyles(VariantManagement)) variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4">
                <WithStyles(VariantManagement) variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" theme={{...}} classes={{...}}>
                  <VariantManagement variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" theme={{...}} classes={{...}}>
                    <Popover open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" openBy={{...}} footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center">
                      <div style={{...}} onClick={[Function]}>
                        <div className="VariantManagement-VariantManagement---">
                          <span className="VariantManagement-VariantManagementText---">
                            <Title level="H4">
                              <WithWebComponent theme={{...}} level="H4">
                                <ui5-title level="H4" class="">
                                  Variant 1
                                </ui5-title>
                              </WithWebComponent>
                            </Title>
                          </span>
                          <Button design="Transparent" icon="navigation-down-arrow">
                            <WithWebComponent theme={{...}} design="Transparent" icon="navigation-down-arrow">
                              <ui5-button design="Transparent" icon="navigation-down-arrow" class="" />
                            </WithWebComponent>
                          </Button>
                        </div>
                      </div>
                      <WithTheme(WithWebComponent) open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center" innerComponentRef={[Function]}>
                        <WithWebComponent theme={{...}} open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center" innerComponentRef={[Function]}>
                          <ui5-popover open={false} header-text="Variants" placement-type="Bottom" tooltip={[undefined]} initial-focus={{...}} horizontal-align="Center" vertical-align="Center" inner-component-ref={[Function]} class="">
                            <Button className="VariantManagement-footer---" onPress={[Function]} design="Emphasized" data-ui5-slot="footer">
                              <WithWebComponent theme={{...}} className="VariantManagement-footer---" onPress={[Function]} design="Emphasized" data-ui5-slot="footer">
                                <ui5-button design="Emphasized" data-ui5-slot="footer" class="VariantManagement-footer---">
                                  Cancel
                                </ui5-button>
                              </WithWebComponent>
                            </Button>
                            <WithTheme(WithWebComponent) onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
                              <WithWebComponent theme={{...}} onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
                                <ui5-list mode="SingleSelect" header-text="" footer-text="" no-data-text="" separators="All" class="">
                                  <StandardListItem style={{...}} data-key="1" type="Active" selected={true} infoState="None">
                                    <WithWebComponent theme={{...}} style={{...}} data-key="1" type="Active" selected={true} infoState="None">
                                      <ui5-li selected={true} style={{...}} data-key="1" type="Active" info-state="None" class="">
                                        Variant 1
                                      </ui5-li>
                                    </WithWebComponent>
                                  </StandardListItem>
                                  <StandardListItem style={{...}} data-key="2" type="Active" selected={false} infoState="None">
                                    <WithWebComponent theme={{...}} style={{...}} data-key="2" type="Active" selected={false} infoState="None">
                                      <ui5-li style={{...}} data-key="2" type="Active" info-state="None" class="">
                                        Variant 2
                                      </ui5-li>
                                    </WithWebComponent>
                                  </StandardListItem>
                                </ui5-list>
                              </WithWebComponent>
                            </WithTheme(WithWebComponent)>
                          </ui5-popover>
                        </WithWebComponent>
                      </WithTheme(WithWebComponent)>
                    </Popover>
                  </VariantManagement>
                </WithStyles(VariantManagement)>
              </Jss(WithStyles(VariantManagement))>
              <div className="FilterBar-headerRowRight---">
                <Button onPress={[Function]} design="Transparent">
                  <WithWebComponent theme={{...}} onPress={[Function]} design="Transparent">
                    <ui5-button design="Transparent" class="">
                      Hide Filter Bar
                    </ui5-button>
                  </WithWebComponent>
                </Button>
              </div>
            </div>
            <div className="FilterBar-filterArea---">
              <Jss(WithStyles(FilterItem)) filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false}>
                <WithStyles(FilterItem) filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false} classes={{...}}>
                  <FilterItem filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false} classes={{...}}>
                    <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                      <Label for="">
                        <WithWebComponent theme={{...}} for="">
                          <ui5-label for="" class="">
                            Classification
                          </ui5-label>
                        </WithWebComponent>
                      </Label>
                      <Select onChange={[Function]} style={{...}} valueState="None">
                        <WithWebComponent theme={{...}} onChange={[Function]} style={{...}} valueState="None">
                          <ui5-select style={{...}} value-state="None" class="">
                            <StandardListItem type="Active" data-key="1" infoState="None">
                              <WithWebComponent theme={{...}} type="Active" data-key="1" infoState="None">
                                <ui5-li type="Active" data-key="1" info-state="None" class="">
                                  Text 1
                                </ui5-li>
                              </WithWebComponent>
                            </StandardListItem>
                            <StandardListItem type="Active" data-key="2" infoState="None">
                              <WithWebComponent theme={{...}} type="Active" data-key="2" infoState="None">
                                <ui5-li type="Active" data-key="2" info-state="None" class="">
                                  Text 2
                                </ui5-li>
                              </WithWebComponent>
                            </StandardListItem>
                          </ui5-select>
                        </WithWebComponent>
                      </Select>
                    </div>
                  </FilterItem>
                </WithStyles(FilterItem)>
              </Jss(WithStyles(FilterItem))>
              <Jss(WithStyles(FilterItem)) type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false}>
                <WithStyles(FilterItem) type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false} classes={{...}}>
                  <FilterItem type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false} classes={{...}}>
                    <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                      <Label for="">
                        <WithWebComponent theme={{...}} for="">
                          <ui5-label for="" class="">
                            Custom Filter 1
                          </ui5-label>
                        </WithWebComponent>
                      </Label>
                      <div>
                        <Switch onClick={[Function]} valueParameter="state" style={{...}}>
                          <WithWebComponent theme={{...}} onClick={[Function]} valueParameter="state" style={{...}}>
                            <ui5-switch on-click={[Function]} value-parameter="state" style={{...}} class="" />
                          </WithWebComponent>
                        </Switch>
                      </div>
                    </div>
                  </FilterItem>
                </WithStyles(FilterItem)>
              </Jss(WithStyles(FilterItem))>
              <Jss(WithStyles(FilterItem)) loading={true} type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]}>
                <WithStyles(FilterItem) loading={true} type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} classes={{...}}>
                  <FilterItem loading={true} type="Custom" label="Custom Filter 1" changeEventName="onClick" valueParamName="state" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} classes={{...}}>
                    <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                      <Label for="">
                        <WithWebComponent theme={{...}} for="">
                          <ui5-label for="" class="">
                            Custom Filter 1
                          </ui5-label>
                        </WithWebComponent>
                      </Label>
                      <BusyIndicator size="Large">
                        <WithWebComponent theme={{...}} size="Large">
                          <ui5-busyindicator size="Large" class="" />
                        </WithWebComponent>
                      </BusyIndicator>
                    </div>
                  </FilterItem>
                </WithStyles(FilterItem)>
              </Jss(WithStyles(FilterItem))>
            </div>
          </div>
        </FilterBar>
      </WithStyles(FilterBar)>
    </Jss(WithStyles(FilterBar))>
  </ThemeProvider>
</ThemeProvider>
```

#### `Select Filter Item`

```
<ThemeProvider withToastContainer={false}>
  <ThemeProvider jss={{...}} theme={{...}}>
    <Jss(WithStyles(FilterBar)) renderVariants={[Function: renderVariants]} displayOnly={true}>
      <WithStyles(FilterBar) renderVariants={[Function: renderVariants]} displayOnly={true} theme={{...}} classes={{...}}>
        <FilterBar renderVariants={[Function: renderVariants]} displayOnly={true} theme={{...}} classes={{...}}>
          <div className="FilterBar-outerContainer---">
            <div className="FilterBar-filterBarHeader---">
              <Jss(WithStyles(VariantManagement)) variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4">
                <WithStyles(VariantManagement) variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" theme={{...}} classes={{...}}>
                  <VariantManagement variantItems={{...}} enabled={true} popupTitle="Variants" initialSelectedKey={{...}} onSelect={[Function: onSelect]} closeOnItemSelect={true} placement="Bottom" level="H4" theme={{...}} classes={{...}}>
                    <Popover open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" openBy={{...}} footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center">
                      <div style={{...}} onClick={[Function]}>
                        <div className="VariantManagement-VariantManagement---">
                          <span className="VariantManagement-VariantManagementText---">
                            <Title level="H4">
                              <WithWebComponent theme={{...}} level="H4">
                                <ui5-title level="H4" class="">
                                  Variant 1
                                </ui5-title>
                              </WithWebComponent>
                            </Title>
                          </span>
                          <Button design="Transparent" icon="navigation-down-arrow">
                            <WithWebComponent theme={{...}} design="Transparent" icon="navigation-down-arrow">
                              <ui5-button design="Transparent" icon="navigation-down-arrow" class="" />
                            </WithWebComponent>
                          </Button>
                        </div>
                      </div>
                      <WithTheme(WithWebComponent) open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center" innerComponentRef={[Function]}>
                        <WithWebComponent theme={{...}} open={false} onAfterOpen={[Function]} headerText="Variants" placementType="Bottom" footer={{...}} className={[undefined]} innerStyles={[undefined]} tooltip={[undefined]} initialFocus={{...}} horizontalAlign="Center" verticalAlign="Center" innerComponentRef={[Function]}>
                          <ui5-popover open={false} header-text="Variants" placement-type="Bottom" tooltip={[undefined]} initial-focus={{...}} horizontal-align="Center" vertical-align="Center" inner-component-ref={[Function]} class="">
                            <Button className="VariantManagement-footer---" onPress={[Function]} design="Emphasized" data-ui5-slot="footer">
                              <WithWebComponent theme={{...}} className="VariantManagement-footer---" onPress={[Function]} design="Emphasized" data-ui5-slot="footer">
                                <ui5-button design="Emphasized" data-ui5-slot="footer" class="VariantManagement-footer---">
                                  Cancel
                                </ui5-button>
                              </WithWebComponent>
                            </Button>
                            <WithTheme(WithWebComponent) onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
                              <WithWebComponent theme={{...}} onItemPress={[Function]} mode="SingleSelect" headerText="" footerText="" noDataText="" separators="All">
                                <ui5-list mode="SingleSelect" header-text="" footer-text="" no-data-text="" separators="All" class="">
                                  <StandardListItem style={{...}} data-key="1" type="Active" selected={true} infoState="None">
                                    <WithWebComponent theme={{...}} style={{...}} data-key="1" type="Active" selected={true} infoState="None">
                                      <ui5-li selected={true} style={{...}} data-key="1" type="Active" info-state="None" class="">
                                        Variant 1
                                      </ui5-li>
                                    </WithWebComponent>
                                  </StandardListItem>
                                  <StandardListItem style={{...}} data-key="2" type="Active" selected={false} infoState="None">
                                    <WithWebComponent theme={{...}} style={{...}} data-key="2" type="Active" selected={false} infoState="None">
                                      <ui5-li style={{...}} data-key="2" type="Active" info-state="None" class="">
                                        Variant 2
                                      </ui5-li>
                                    </WithWebComponent>
                                  </StandardListItem>
                                </ui5-list>
                              </WithWebComponent>
                            </WithTheme(WithWebComponent)>
                          </ui5-popover>
                        </WithWebComponent>
                      </WithTheme(WithWebComponent)>
                    </Popover>
                  </VariantManagement>
                </WithStyles(VariantManagement)>
              </Jss(WithStyles(VariantManagement))>
              <div className="FilterBar-headerRowRight---">
                <Button onPress={[Function]} design="Transparent">
                  <WithWebComponent theme={{...}} onPress={[Function]} design="Transparent">
                    <ui5-button design="Transparent" class="">
                      Hide Filter Bar
                    </ui5-button>
                  </WithWebComponent>
                </Button>
              </div>
            </div>
            <div className="FilterBar-filterArea---">
              <Jss(WithStyles(FilterItem)) filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false}>
                <WithStyles(FilterItem) filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false} classes={{...}}>
                  <FilterItem filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} loading={false} classes={{...}}>
                    <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                      <Label for="">
                        <WithWebComponent theme={{...}} for="">
                          <ui5-label for="" class="">
                            Classification
                          </ui5-label>
                        </WithWebComponent>
                      </Label>
                      <Select onChange={[Function]} style={{...}} valueState="None">
                        <WithWebComponent theme={{...}} onChange={[Function]} style={{...}} valueState="None">
                          <ui5-select style={{...}} value-state="None" class="">
                            <StandardListItem type="Active" data-key="1" infoState="None">
                              <WithWebComponent theme={{...}} type="Active" data-key="1" infoState="None">
                                <ui5-li type="Active" data-key="1" info-state="None" class="">
                                  Text 1
                                </ui5-li>
                              </WithWebComponent>
                            </StandardListItem>
                            <StandardListItem type="Active" data-key="2" infoState="None">
                              <WithWebComponent theme={{...}} type="Active" data-key="2" infoState="None">
                                <ui5-li type="Active" data-key="2" info-state="None" class="">
                                  Text 2
                                </ui5-li>
                              </WithWebComponent>
                            </StandardListItem>
                          </ui5-select>
                        </WithWebComponent>
                      </Select>
                    </div>
                  </FilterItem>
                </WithStyles(FilterItem)>
              </Jss(WithStyles(FilterItem))>
              <Jss(WithStyles(FilterItem)) loading={true} filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]}>
                <WithStyles(FilterItem) loading={true} filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} classes={{...}}>
                  <FilterItem loading={true} filterItems={{...}} label="Classification" type="Select" placeholder="" renderText={[Function: renderText]} onChange={[Function: onChange]} classes={{...}}>
                    <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                      <Label for="">
                        <WithWebComponent theme={{...}} for="">
                          <ui5-label for="" class="">
                            Classification
                          </ui5-label>
                        </WithWebComponent>
                      </Label>
                      <BusyIndicator size="Large">
                        <WithWebComponent theme={{...}} size="Large">
                          <ui5-busyindicator size="Large" class="" />
                        </WithWebComponent>
                      </BusyIndicator>
                    </div>
                  </FilterItem>
                </WithStyles(FilterItem)>
              </Jss(WithStyles(FilterItem))>
              <Jss(WithStyles(FilterItem)) label="Classification" type="Default" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false}>
                <WithStyles(FilterItem) label="Classification" type="Default" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false} classes={{...}}>
                  <FilterItem label="Classification" type="Default" placeholder="" renderText={[Function: renderText]} filterItems={{...}} onChange={[Function: onChange]} loading={false} classes={{...}}>
                    <div className="FilterItem-filterItem---" style={[undefined]} title={[undefined]}>
                      <Label for="">
                        <WithWebComponent theme={{...}} for="">
                          <ui5-label for="" class="">
                            Classification
                          </ui5-label>
                        </WithWebComponent>
                      </Label>
                      <Input placeholder="" onChange={[Function]} style={{...}} type="Text" value="" valueState="None">
                        <WithWebComponent theme={{...}} placeholder="" onChange={[Function]} style={{...}} type="Text" value="" valueState="None">
                          <ui5-input placeholder="" style={{...}} type="Text" value="" value-state="None" class="" />
                        </WithWebComponent>
                      </Input>
                    </div>
                  </FilterItem>
                </WithStyles(FilterItem)>
              </Jss(WithStyles(FilterItem))>
            </div>
          </div>
        </FilterBar>
      </WithStyles(FilterBar)>
    </Jss(WithStyles(FilterBar))>
  </ThemeProvider>
</ThemeProvider>
```

