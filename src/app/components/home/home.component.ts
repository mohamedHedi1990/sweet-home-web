import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import moment from 'moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  rechercheform: FormGroup;
  invites = [];
  villes = [];
  iddate: Date;
  datefin: Date;
  tendances = [
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'La Villa du Cap',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
    {
      image:
        'https://res.cloudinary.com/tunrooms/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_450/v1/Tunrooms/iy8padzw5nquble4nn5x',
      designation: 'Villa bleu',
      logement: '3 Lits',
      prix: '750',
      avis: '',
    },
  ];
  selected = '1';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rechercheform = this.fb.group({
      id_ville: new FormControl('', Validators.required),
      date_arr: new FormControl('', Validators.required),
      date_dep: new FormControl('', Validators.required),
      id_invite: new FormControl('1', Validators.required),
    });
  }
  Rechercher(value: any) {
    if (this.rechercheform.invalid) {
      this.rechercheform.markAllAsTouched();
    }
    if (this.rechercheform.valid) {
      var datedebut;
      var datefin;
      if (
        value.Date_D == undefined ||
        value.Date_D == '' ||
        value.Date_D == 'Invalid date'
      ) {
        value.Date_D = '';
        datedebut = '';
      } else {
        var momentDateDebut = new Date(value.Date_D);
        datedebut = moment(momentDateDebut).format('YYYY-MM-DD');
      }
      if (
        value.Date_F == undefined ||
        value.Date_F == '' ||
        value.Date_F == 'Invalid date'
      ) {
        value.Date_F = '';
        datefin = '';
      } else {
        var momentDateFin = new Date(value.Date_F);
        datefin = moment(momentDateFin).format('YYYY-MM-DD');
      }
      // this.closerv.listecloture(datedebut, datefin, this.val).subscribe(res => {

      //   this.data = res;

      //   this.loading = false;
    }
  }
}
