import React, { useState } from 'react'
import { ShapeLayer } from './lib'
import { UnitProvider, Units } from './lib/contexts/UnitContext'

export default function App() {
  const [unit, setUnit] = useState<Units>(Units.Pixels)

  return (
    <UnitProvider value={unit}>
      <ShapeLayer>
        {({ rotation, positions, dimensions }) => (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'limegreen',
                position: 'absolute',
                transform: `rotate(${rotation.value}deg)`,
                top: positions.yRepresentation,
                left: positions.xRepresentation,
                width: dimensions.widthRepresentation,
                height: dimensions.heightRepresentation,
              }}
            >
              <span>Width: {dimensions.widthRepresentation}</span>
              <span>Height: {dimensions.heightRepresentation}</span>
            </div>

            <form
              style={{ position: 'fixed', bottom: 0, left: 0, display: 'flex' }}
            >
              <fieldset>
                <label htmlFor="unit">Unit</label>

                <select
                  id="unit"
                  onChange={(e) => setUnit(e.target.value as Units)}
                >
                  <option value={Units.Pixels}>px</option>
                  <option value={Units.Centimeters}>cm</option>
                </select>
              </fieldset>

              <fieldset>
                <label htmlFor="x">x</label>

                <input
                  id="x"
                  type="number"
                  value={positions.x}
                  onChange={(e) => positions.setX(Number(e.target.value))}
                />
                {unit}
              </fieldset>

              <fieldset>
                <label htmlFor="y">y</label>

                <input
                  id="y"
                  type="number"
                  value={positions.y}
                  onChange={(e) => positions.setY(Number(e.target.value))}
                />
                {unit}
              </fieldset>

              <fieldset>
                <label htmlFor="width">width</label>

                <input
                  id="width"
                  type="number"
                  value={dimensions.width}
                  onChange={(e) => dimensions.setWidth(Number(e.target.value))}
                />
                {unit}
              </fieldset>

              <fieldset>
                <label htmlFor="height">height</label>

                <input
                  id="height"
                  type="number"
                  value={dimensions.height}
                  onChange={(e) => dimensions.setHeight(Number(e.target.value))}
                />
                {unit}
              </fieldset>

              <fieldset>
                <label htmlFor="rotation">rotation</label>
                <input
                  id="rotation"
                  type="range"
                  value={rotation.value}
                  min="0"
                  max="360"
                  onChange={(e) => rotation.setValue(Number(e.target.value))}
                />
                degrees
              </fieldset>
            </form>
          </>
        )}
      </ShapeLayer>
    </UnitProvider>
  )
}
