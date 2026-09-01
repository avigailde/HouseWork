import './OrderForm.css'

function OrderForm({
    formData,
    onChange,
    onSubmit,
    isSubmitting,
}) {
    return (
        <form className="order-form" onSubmit={onSubmit}>
            <div className="order-field">
                <label>שם פרטי ומשפחה</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={onChange}
                    required
                />
            </div>

            <div className="order-field">
                <label>כתובת מלאה</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={onChange}
                    required
                />
            </div>

            <div className="order-field">
                <label>מייל</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    required
                />
            </div>

            <button
                type="submit"
                className="confirm-button"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'שולח...' : 'אשר הזמנה'}
            </button>
        </form>
    )
}

export default OrderForm