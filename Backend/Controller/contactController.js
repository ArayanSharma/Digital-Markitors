import Contact from "../Model/Contact.js";

// Create Contact
export const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      mobile,
      service,
      website,
      source,
      message,
    } = req.body;

    if (!name || !email || !(phone || mobile) || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, Email, Phone and Message are required",
      });
    }

    const contactPhone = phone || mobile;

    const contact = await Contact.create({
      name,
      email,
      phone: contactPhone,
      service,
      website,
      source,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      contact,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    const normalizedContacts = contacts.map((contact) => {
      const data = contact.toObject();
      data.phone = data.phone || data.mobile || "";
      return data;
    });

    res.status(200).json({
      success: true,
      contacts: normalizedContacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Contact
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};








