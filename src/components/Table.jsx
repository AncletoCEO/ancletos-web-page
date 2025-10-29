import React from 'react';
import './Table.css';

const Table = () => {
  return (
    <table id="tabla">
      <tbody>
        <tr>
          <td colSpan="2">
            <div className="reloj1">
              <img src="/gifs/reloj.gif" alt="Clock" />
            </div>
          </td>
          <td rowSpan="4">
            <div id="jesus">
              <img src="/gifs/ancleto full clean.gif" alt="Ancleto" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="gusano">
              <img src="/gifs/gusanovalign.gif" alt="Worm" />
            </div>
          </td>
          <td>
            <div id="tostadorachica1">
              <img src="/gifs/tostadora1.gif" alt="Toaster" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="gusano2">
              <img src="/gifs/gusanovalign2.gif" alt="Worm" />
            </div>
          </td>
          <td>
            <div id="tostadorachica2">
              <img src="/gifs/tostadora1.gif" alt="Toaster" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="tostadoragrande">
              <img src="/gifs/tostadora2.gif" alt="Toaster" />
            </div>
          </td>
          <td>
            <div>
              <img src="/gifs/boca.gif" alt="Mouth" />
            </div>
          </td>
          <td>
            <div id="campanagrande">
              <img src="/gifs/campana.gif" alt="Bell" />
            </div>
          </td>
          <td>
            <div id="boca2">
              <img src="/gifs/boca2.gif" alt="Mouth" />
            </div>
          </td>
        </tr>
        <tr>
          <td rowSpan="2">
            <div id="campanachica">
              <img src="/gifs/campanachica.gif" alt="Bell" />
            </div>
            <div className="gusano">
              <img src="/gifs/gusanovalign2.gif" alt="Worm" />
            </div>
          </td>
          <td>
            <div className="reloj2">
              <img src="/gifs/reloj.gif" alt="Clock" />
            </div>
          </td>
          <td>
            <div id="tostadora3">
              <img src="/gifs/tostadora3.gif" alt="Toaster" />
            </div>
          </td>
          <td>
            <div className="reloj2">
              <img src="/gifs/reloj.gif" alt="Clock" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="gusano2">
              <img src="/gifs/gusanovalign.gif" alt="Worm" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;