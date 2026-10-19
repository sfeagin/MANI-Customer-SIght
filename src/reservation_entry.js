<section id="reserve" className="reserve-section">
  <div className="reserve-shell">
    <div className="reserve-copy">
      <p className="reserve-kicker">RESERVE YOUR FACILITY'S SPOT</p>

      <h2>
        Ready to reserve<br />
        your facility's<br />
        MANI implementation<br />
        spot?
      </h2>

      <p className="reserve-description">
        Tell us about your facility, your timeline, and where your team is
        experiencing operational fragmentation. MANI is currently onboarding a
        limited number of facilities to ensure deployment quality.
      </p>

      <div className="reserve-contact">
        <p>✉ mani@manufacturingautomatednetworkinterface.com</p>
        <p>⌕ (843) 319-5373 — Google screening process</p>
      </div>
    </div>

    <form className="reserve-form">
      <select name="reason_for_booking" required defaultValue="">
        <option value="" disabled>
          Reason for booking
        </option>
        <option value="Reserve implementation spot">
          Reserve implementation spot
        </option>
        <option value="Request MANI demo">Request MANI demo</option>
        <option value="Discuss facility pain points">
          Discuss facility pain points
        </option>
        <option value="Commercial partnership inquiry">
          Commercial partnership inquiry
        </option>
      </select>

      <input name="name" placeholder="Full Name" required />
      <input name="company" placeholder="Company Name" required />
      <input name="role" placeholder="Current Role / Title" />
      <input name="email" type="email" placeholder="Work Email" required />
      <input name="phone" placeholder="Phone Number" />
      <input name="location" placeholder="Facility Location / City, State" />

      <input
        name="machine_count"
        placeholder="Approx. Number of Machines"
      />

      <input
        name="systems"
        placeholder="Current Systems Used: ERP, MES, Quality, Maintenance, HR..."
      />

      <div className="reserve-date-grid">
        <label>
          Desired Implementation Start
          <input name="implementation_start" type="date" />
        </label>

        <label>
          Desired Implementation End
          <input name="implementation_end" type="date" />
        </label>
      </div>

      <select name="best_contact_time" defaultValue="">
        <option value="" disabled>
          Best Time to Contact
        </option>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
        <option value="Anytime">Anytime</option>
      </select>

      <textarea
        name="message"
        placeholder="Number of machines, systems, package interest, implementation goals, and key challenges"
        rows="6"
      />

      <button type="submit">SUBMIT REQUEST</button>
    </form>
  </div>
</section>