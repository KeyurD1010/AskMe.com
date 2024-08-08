import React from 'react'
import WidgetContent from './WidgetContent'
import "./css/Widget.css";
function Widget() {
  return (
    <div className="widget">
      <div className="widget_header">
        <h4>Know More About</h4>
      </div>
      <div className="widget_contents">
        <WidgetContent />
        <WidgetContent />
      </div>
    </div>
  )
}

export default Widget