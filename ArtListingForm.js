import React, { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import { getArtObjects, getDetailedInfo } from "../services/MetService";

// Displays art cards based on search criteria
function ArtListingForm () {
    const [searchCriteria, setCriteria] = useState(0);
    const [displayData, setDisplayData] = useState ([]);

    const setSearchCriteria = (criteria) => {
        setCriteria (criteria);
    }

    // get Ids of objects to display
    const initialRender = useRef(true);
    const metListing = useRef([]);
    useEffect(() => {
        // gets detailed data for each art object
        const getArtListingData = (id) => {
            getDetailedInfo(id).then((response) => {
                    metListing.current.push (response.data);
                    setDisplayData (metListing.current.map (mapArt));
                }).catch ((err) => {
                    // JTG: message on UI
                    console.log ('error: ',err)
                });
        }

        // create card to display
        const mapArt = (art) => {
            if (!art.primaryImageSmall)
                return; 
            const imgLine = art.primaryImageSmall ? <img src={art.primaryImageSmall} className="card-img-top" alt="..." /> : <h3>No image available</h3>;
            return ( 
                <div>
                <div className="col my-2 content">
                <div className="card" id={art.objectID} style={{width: "15rem" }}>
                    {imgLine}
                    <div className="card-body">
                        <p>{getDisplayData(art)}</p>
                    </div>
                </div>
                </div>
                </div>
            );
        }

        // display fields may not exist so create display text taking that into account
        const getDisplayData = (art) => {
            let displayInfo = hasValidField (art.title) ? art.title : '';
            if (hasValidField (art.artistPrefix))
            {
                if (hasValidField (art.artistName))
                    displayInfo += `, ${art.artistPrefix} ${art.artistName}`;
                else displayInfo += `, ${art.artistPrefix}`;
            }
            else {
                if (hasValidField (art.artistName))
                    displayInfo += `, ${art.artistName}`;
            }
            displayInfo += hasValidField (art.objectDate) ? `, ${art.objectDate}` : '';
            return displayInfo;
        }

        ////////// start of useEffect //////////
        if (initialRender.current) {
            initialRender.current = false;
        }
        else {
            // get list of art object ids
            getArtObjects(searchCriteria).then((response) => {
                const len = response.data.total;
                const indices = response.data.objectIDs.splice (0, len);

                // loop through list and get detailed data on each art piece
                for (const artObject of indices)
                {
                    getArtListingData (artObject);
                }
            }).catch ((err) => {
                // JTG: message on UI
                console.log ('error: ',err)
            });
        }
      }, [searchCriteria]);
    
    // fields that make up display text may either be null or undefined
    const hasValidField = (data) => {
        return data && data !== undefined ? true : false;
    }

    return (
        <div>
            <NavBar visibility="visible" setParentSearchCriteria={(criteria)=>setSearchCriteria(criteria)}></NavBar>
            <div class="container content">
                <div class="row">
                    {displayData}
                </div>
            </div>
        </div>
    )
}

export default ArtListingForm;

