import React, { ReactElement } from 'react'
import { FiEdit, FiShare2, FiTrash } from 'react-icons/fi'
import { Container } from '../styles/components/tablemyteams'

const TableMyTeams = (): ReactElement => (
  <Container>
    <table>
      <thead>
        <tr>
          <th id="name-column">Name</th>
          <th id="description-column">Instrument</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Lennon</td>
          <td className="description">
            <span>Rhythm Guitar</span>
            <div className="action-buttons">
              <FiEdit size={16} />
              <FiShare2 size={16} />
              <FiTrash size={16} />
            </div>
          </td>
        </tr>
        <tr>
          <td>John Lennon</td>
          <td className="description">
            <span>Rhythm Guitar</span>
            <div className="action-buttons">
              <FiEdit size={16} />
              <FiShare2 size={16} />
              <FiTrash size={16} />
            </div>
          </td>
        </tr>
        <tr>
          <td>John Lennon</td>
          <td className="description">
            <span>Rhythm Guitar</span>
            <div className="action-buttons">
              <FiEdit size={16} />
              <FiShare2 size={16} />
              <FiTrash size={16} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </Container>
)

export default TableMyTeams
