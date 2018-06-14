import React, { Component, Fragment } from 'react'

class Tabs extends Component {
  static Tab = ({ render, handleClick, isActive }) =>
    render({ isActive, handleClick })

  render() {
    const { children, active, onTabClick, ...rest } = this.props
    return (
      <Fragment>
        <div {...rest}>
          {React.Children.map(children, (tab, i) =>
            React.cloneElement(tab, {
              isActive: i === active,
              handleClick: onTabClick(i),
            }),
          )}
        </div>
        {children[active].props.children}
      </Fragment>
    )
  }
}

export default Tabs
