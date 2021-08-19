import React, { useState } from 'react'
import { ShapeLayer, Shapes } from './lib'
import { UnitProvider, Units } from './lib/contexts/UnitContext'

export default function App() {
  const [unit, setUnit] = useState<Units>(Units.Pixels)

  return (
    <UnitProvider value={unit}>
      <ShapeLayer>
        {({ styles, shape, setShape, rotation, positions, dimensions }) => (
          <>
            <div
              style={{
                ...styles,
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
              <span>{shape}</span>
              <span>Width: {dimensions.widthRepresentation}</span>
              <span>Height: {dimensions.heightRepresentation}</span>
            </div>

            <form
              style={{ position: 'fixed', bottom: 0, left: 0, display: 'flex' }}
            >
              <fieldset>
                <label htmlFor="shape">Shape</label>

                <select
                  id="shape"
                  onChange={(e) => setShape(e.target.value as Shapes)}
                >
                  <option value={Shapes.Bevel}>{Shapes.Bevel}</option>

                  <option value={Shapes.Circle}>{Shapes.Circle}</option>

                  <option value={Shapes.Close}>{Shapes.Close}</option>

                  <option value={Shapes.Cross}>{Shapes.Cross}</option>

                  <option value={Shapes.Decagon}>{Shapes.Decagon}</option>

                  <option value={Shapes.Ellipse}>{Shapes.Ellipse}</option>

                  <option value={Shapes.Frame}>{Shapes.Frame}</option>

                  <option value={Shapes.Heptagon}>{Shapes.Heptagon}</option>

                  <option value={Shapes.Hexagon}>{Shapes.Hexagon}</option>

                  <option value={Shapes.LeftArrow}>{Shapes.LeftArrow}</option>

                  <option value={Shapes.LeftChevron}>
                    {Shapes.LeftChevron}
                  </option>

                  <option value={Shapes.LeftPoint}>{Shapes.LeftPoint}</option>

                  <option value={Shapes.Message}>{Shapes.Message}</option>

                  <option value={Shapes.Nonagon}>{Shapes.Nonagon}</option>

                  <option value={Shapes.Octagon}>{Shapes.Octagon}</option>

                  <option value={Shapes.Parallelogram}>
                    {Shapes.Parallelogram}
                  </option>

                  <option value={Shapes.Pentagon}>{Shapes.Pentagon}</option>

                  <option value={Shapes.Rabbet}>{Shapes.Rabbet}</option>

                  <option value={Shapes.Rectangle}>{Shapes.Rectangle}</option>

                  <option value={Shapes.Rhombus}>{Shapes.Rhombus}</option>

                  <option value={Shapes.RightArrow}>{Shapes.RightArrow}</option>

                  <option value={Shapes.RightChevron}>
                    {Shapes.RightChevron}
                  </option>

                  <option value={Shapes.RightPoint}>{Shapes.RightPoint}</option>

                  <option value={Shapes.Star}>{Shapes.Star}</option>

                  <option value={Shapes.Trapezoid}>{Shapes.Trapezoid}</option>

                  <option value={Shapes.Triangle}>{Shapes.Triangle}</option>
                </select>
              </fieldset>

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
