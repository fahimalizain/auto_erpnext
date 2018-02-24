// Copyright (c) 2018, faztp12 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Vehicle Entry', {
	refresh: function(frm) {
		frm.set_query("vehicle_make", function() {
			return {
				filters: {
					brand: frm.doc.vehicle_brand || ""
				}
			}
		});
		
		if (frm.doc.docstatus == 1) {
			frm.add_custom_button(__("Make Quotation"), function() {
				frappe.route_options = {
					customer: frm.doc.customer,
					posting_date: frm.doc.posting_date,
					vehicle_entry: frm.doc.name
				}
				frappe.new_doc("Quotation")
			});
		}
	}
});
