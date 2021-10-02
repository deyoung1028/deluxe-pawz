



function AddServices() {
    return(
        <div className = "addService">
            <label>Select Your Service for your pet</label>
              <select>
                  <option value = 'fullgroom'>Full Groom</option>
                  <option value = 'tidygroom'>Tidy Up Groom</option>
              </select>
              <label>Select Add-On service for your pet</label>
              <select>
                  <option value = 'none'>none</option>
                  <option value = 'theoakley'>The Oakley - Bow,necklace,polish</option>
                  <option value = 'theblue'>The Oakley - Bow-tie/,polish, for him spa treatment</option>
                  <option value = 'bow-bow_tie'>Bow or Bow-tie</option>
                  <option value = 'necklace'>Necklace</option>
                  <option value = 'polish'>Nail Polish</option>
                  <option value = 'hair-color'>Hair Color</option>
              </select>
              <button onClick = {AddServices}>Add Services</button>
            </div>
        

    )
}

export default AddServices